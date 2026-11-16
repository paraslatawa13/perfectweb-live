import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PhoneInput, { getCountries } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import "react-phone-number-input/style.css";
import {
  Search, ShieldCheck, Rocket, CheckCircle2, XCircle, CalendarClock, Video, Mail, ArrowLeft, Loader2,
} from "lucide-react";

import { bookingApi, apiError } from "../api/bookingApi";
import SlotPicker from "../components/Booking/SlotPicker";
import OtpStep from "../components/Booking/OtpStep";
import PaymentStep from "../components/Booking/PaymentStep";
import Turnstile from "../components/Booking/Turnstile";
import "../styles/booking.css";

const PACKAGE_META = {
  audit: { icon: Search, label: "Package 01", desc: "Find out if it’s worth saving, and what saving it takes." },
  stabilization: { icon: ShieldCheck, label: "Package 02", desc: "Turn a fragile prototype into software you can maintain." },
  production: { icon: Rocket, label: "Package 03", desc: "Get ready for real users, ongoing development and growth." },
};

const COUNTRIES = getCountries()
  .map((c) => ({ code: c, name: en[c] }))
  .filter((c) => c.name)
  .sort((a, b) => a.name.localeCompare(b.name));

const USER_TZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fmtWhen = (iso, tz = USER_TZ) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: tz, weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true,
  }).format(new Date(iso));

const money = (amount, currency) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency }).format(Number(amount));

export default function BookSession() {
  const [params, setParams] = useSearchParams();
  const [config, setConfig] = useState(null);
  const [slots, setSlots] = useState([]);
  const [loadError, setLoadError] = useState("");

  // details | otp | payment | confirming | success | error
  const [step, setStep] = useState("details");
  const [form, setForm] = useState({
    package: PACKAGE_META[params.get("package")] ? params.get("package") : "audit",
    name: "", email: "", phone: "", country: "", start_at: "",
  });
  const [touched, setTouched] = useState({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [resendLeft, setResendLeft] = useState(0);
  const [payment, setPayment] = useState(null); // { reference, client_secret, amount, currency, hold_expires_at }
  const [result, setResult] = useState(null); // booking summary
  const [failMessage, setFailMessage] = useState("");
  const topRef = useRef(null);

  const stripePromise = useMemo(() => (config?.stripe_key ? loadStripe(config.stripe_key) : null), [config?.stripe_key]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const refreshSlots = useCallback(() => bookingApi.slots().then(setSlots).catch(() => {}), []);

  // Initial load, plus handling the return from a 3-D Secure redirect.
  useEffect(() => {
    const ref = params.get("ref");
    const pi = params.get("payment_intent");
    if (ref && pi) {
      setStep("confirming");
      bookingApi
        .confirm({ reference: ref, payment_intent: pi })
        .then(({ booking }) => finishWith(booking))
        .catch((e) => {
          setFailMessage(apiError(e));
          setStep("error");
        });
    }
    Promise.all([bookingApi.config(), bookingApi.slots()])
      .then(([cfg, s]) => {
        setConfig(cfg);
        setSlots(s);
      })
      .catch((e) => setLoadError(apiError(e, "Booking is unavailable right now.")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (resendLeft <= 0) return undefined;
    const t = setTimeout(() => setResendLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendLeft]);

  const finishWith = (booking) => {
    if (booking.status === "confirmed") {
      setResult(booking);
      setStep("success");
    } else if (booking.status === "needs_attention") {
      setResult(booking);
      setFailMessage("Your payment went through, but that time was taken while you were paying. Our team has been alerted and will email you within a few hours to arrange a new time.");
      setStep("error");
    } else {
      setFailMessage("We haven't received the payment yet. If you were charged, you'll get a confirmation email shortly.");
      setStep("error");
    }
    setParams({}, { replace: true });
    scrollTop();
  };

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v?.target ? v.target.value : v }));

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your full name." : "",
    email: !EMAIL_RE.test(form.email.trim()) ? "Please enter a valid email address." : "",
    phone: !form.phone || form.phone.replace(/\D/g, "").length < 7 ? "Please enter a valid phone number." : "",
    country: !form.country ? "Please choose your country." : "",
    start_at: !form.start_at ? "Please choose a date and time." : "",
  };
  const valid = Object.values(errors).every((e) => !e);
  const showErr = (k) => touched[k] && errors[k];

  const sendCode = async () => {
    setBusy(true);
    setError("");
    try {
      const r = await bookingApi.sendOtp({ email: form.email.trim(), name: form.name.trim(), turnstile_token: turnstileToken });
      setResendLeft(r.retry_after || config?.otp_resend_seconds || 59);
      setStep("otp");
      scrollTop();
    } catch (e) {
      const wait = e?.response?.data?.retry_after;
      if (wait && wait < 120) {
        setResendLeft(wait);
        setStep("otp");
      } else {
        setError(apiError(e));
      }
    } finally {
      setBusy(false);
    }
  };

  const submitDetails = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, country: true, start_at: true });
    if (!valid) return;
    if (config?.turnstile_site_key && !turnstileToken) {
      setError("Please complete the security check.");
      return;
    }
    sendCode();
  };

  const verifyAndStart = async (code) => {
    setBusy(true);
    setError("");
    try {
      await bookingApi.verifyOtp({ email: form.email.trim(), code });
      const p = await bookingApi.start({
        package: form.package,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone,
        country: form.country,
        start_at: form.start_at,
        timezone: USER_TZ,
      });
      setPayment(p);
      setStep("payment");
      scrollTop();
    } catch (e) {
      if (e?.response?.data?.code === "slot_taken") {
        setForm((f) => ({ ...f, start_at: "" }));
        refreshSlots();
        setStep("details");
        setError(apiError(e));
        scrollTop();
      } else {
        setError(apiError(e));
      }
    } finally {
      setBusy(false);
    }
  };

  const onPaid = async (paymentIntentId) => {
    setStep("confirming");
    scrollTop();
    try {
      const { booking } = await bookingApi.confirm({ reference: payment.reference, payment_intent: paymentIntentId });
      finishWith(booking);
    } catch (e) {
      setFailMessage(apiError(e));
      setStep("error");
    }
  };

  const onHoldExpired = useCallback(() => {
    setFailMessage("The time we were holding for you ran out before payment was completed, so the slot was released. You have not been charged. Please choose a time again.");
    setStep("error");
    setPayment(null);
  }, []);

  const restart = () => {
    setPayment(null);
    setResult(null);
    setError("");
    setFailMessage("");
    setForm((f) => ({ ...f, start_at: "" }));
    setStep("details");
    refreshSlots();
    scrollTop();
  };

  const pkg = PACKAGE_META[form.package];
  const pkgTitle = config?.packages?.find((p) => p.id === form.package)?.title || "";
  const priceLabel = config ? money(config.price, config.currency) : "";
  const PkgIcon = pkg.icon;

  const stepsList = [
    ["details", "Your details"],
    ["otp", "Verify email"],
    ["payment", "Payment"],
  ];
  const stepIndex = { details: 0, otp: 1, payment: 2, confirming: 2, success: 3, error: 3 }[step];

  return (
    <main className="bk-page" ref={topRef}>
      <Helmet>
        <title>Book your AI Code Rescue session | Perfect Web Services</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container">
        <Link to="/aicoderescue" className="bk-back"><ArrowLeft size={16} /> Back to AI Code Rescue</Link>

        <div className="bk-grid">
          {/* Summary */}
          <aside className="bk-summary">
            <span className="bk-eyebrow">{pkg.label}</span>
            <div className="bk-summary-head">
              <span className="bk-summary-icon"><PkgIcon size={30} /></span>
              <h1>{pkgTitle || "Book your session"}</h1>
            </div>
            <p className="bk-summary-desc">{pkg.desc}</p>

            {step === "details" && config && (
              <div className="bk-pkg-switch" role="radiogroup" aria-label="Package">
                {config.packages.map((p) => (
                  <button
                    type="button" role="radio" aria-checked={form.package === p.id} key={p.id}
                    className={form.package === p.id ? "is-active" : ""}
                    onClick={() => set("package")(p.id)}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            )}

            <ul className="bk-facts">
              <li><CalendarClock size={18} /> {config ? `${config.slot_minutes}-minute session` : "Session"}</li>
              <li><Video size={18} /> Online video call (Google Meet)</li>
              <li><Mail size={18} /> Confirmation and calendar invite by email</li>
            </ul>

            {form.start_at && step !== "success" && (
              <div className="bk-chosen">
                <small>Your time</small>
                <strong>{fmtWhen(form.start_at)}</strong>
              </div>
            )}

            <div className="bk-price">
              <span>Booking fee</span>
              <strong>{priceLabel || "—"}</strong>
            </div>
            <p className="bk-policy">
              No cancellations. You can reschedule up to {config?.reschedule_cutoff_hours ?? 12} hours before your session using the link in your email.
            </p>
          </aside>

          {/* Steps */}
          <section className="bk-card" aria-live="polite">
            {step !== "success" && step !== "error" && (
              <ol className="bk-steps">
                {stepsList.map(([key, label], i) => (
                  <li key={key} className={i < stepIndex ? "is-done" : i === stepIndex ? "is-current" : ""}>
                    <span>{i + 1}</span>{label}
                  </li>
                ))}
              </ol>
            )}

            {loadError && step === "details" && <div className="bk-banner bk-banner-error">{loadError}</div>}
            {config && !config.enabled && step === "details" && (
              <div className="bk-banner bk-banner-error">Online booking is paused right now. Please <Link to="/contact-us">contact us</Link> and we'll arrange a time.</div>
            )}

            {step === "details" && (
              <form onSubmit={submitDetails} noValidate>
                {error && <div className="bk-banner bk-banner-error" role="alert">{error}</div>}

                <h2 className="bk-h2">1. Pick a date & time</h2>
                {!config && !loadError ? (
                  <div className="bk-loading"><Loader2 className="bk-spin" size={22} /> Loading available times…</div>
                ) : (
                  <SlotPicker slots={slots} value={form.start_at} onChange={(v) => { set("start_at")(v); setError(""); }} />
                )}
                {showErr("start_at") && <p className="bk-field-error">{errors.start_at}</p>}

                <h2 className="bk-h2">2. Your details</h2>
                <div className="bk-fields">
                  <label className="bk-field">
                    <span>Full name *</span>
                    <input value={form.name} onChange={set("name")} onBlur={() => setTouched((t) => ({ ...t, name: true }))} autoComplete="name" maxLength={120} aria-invalid={!!showErr("name")} />
                    {showErr("name") && <em>{errors.name}</em>}
                  </label>
                  <label className="bk-field">
                    <span>Email *</span>
                    <input type="email" value={form.email} onChange={set("email")} onBlur={() => setTouched((t) => ({ ...t, email: true }))} autoComplete="email" maxLength={190} aria-invalid={!!showErr("email")} />
                    {showErr("email") && <em>{errors.email}</em>}
                  </label>
                  <div className="bk-field">
                    <span>Phone *</span>
                    <PhoneInput
                      international
                      defaultCountry="GB"
                      value={form.phone}
                      onChange={(v) => set("phone")(v || "")}
                      onCountryChange={(c) => c && !form.country && set("country")(en[c])}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      className="bk-phone"
                      aria-label="Phone number"
                    />
                    {showErr("phone") && <em>{errors.phone}</em>}
                  </div>
                  <label className="bk-field">
                    <span>Country *</span>
                    <select value={form.country} onChange={set("country")} onBlur={() => setTouched((t) => ({ ...t, country: true }))} aria-invalid={!!showErr("country")}>
                      <option value="">Select your country</option>
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                    {showErr("country") && <em>{errors.country}</em>}
                  </label>
                </div>

                <Turnstile siteKey={config?.turnstile_site_key} onToken={setTurnstileToken} />

                <button type="submit" className="bk-btn bk-btn-primary" disabled={busy || !config?.enabled}>
                  {busy ? "Sending code…" : "Continue – verify my email"}
                </button>
                <p className="bk-note">We'll email you a one-time code to confirm it's really you before payment.</p>
              </form>
            )}

            {step === "otp" && (
              <OtpStep
                email={form.email.trim()}
                busy={busy}
                error={error}
                secondsLeft={resendLeft}
                validMinutes={config?.otp_valid_minutes ?? 10}
                onVerify={verifyAndStart}
                onResend={sendCode}
                onBack={() => { setError(""); setStep("details"); }}
              />
            )}

            {step === "payment" && payment && stripePromise && (
              <>
                <h2 className="bk-h2">Payment</h2>
                <p className="bk-note mb-3">Booking reference <strong>{payment.reference}</strong> · {money(payment.amount, payment.currency)}</p>
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret: payment.client_secret,
                    appearance: {
                      theme: "stripe",
                      variables: { colorPrimary: "#ff6a13", colorText: "#0f2557", borderRadius: "10px", fontFamily: "Montserrat, Arial, sans-serif" },
                    },
                  }}
                >
                  <PaymentStep
                    reference={payment.reference}
                    amountLabel={money(payment.amount, payment.currency)}
                    holdExpiresAt={payment.hold_expires_at}
                    onPaid={onPaid}
                    onExpired={onHoldExpired}
                    onError={(m) => { setFailMessage(m); setStep("error"); }}
                  />
                </Elements>
              </>
            )}

            {step === "confirming" && (
              <div className="bk-result">
                <Loader2 className="bk-spin" size={44} />
                <h2>Confirming your booking…</h2>
                <p>Please keep this page open. This only takes a few seconds.</p>
              </div>
            )}

            {step === "success" && result && (
              <div className="bk-result bk-result-success">
                <CheckCircle2 size={56} />
                <h2>You're booked!</h2>
                <p>We've emailed your confirmation and a calendar invite to <strong>{result.email}</strong>.</p>
                <dl className="bk-result-list">
                  <dt>Reference</dt><dd>{result.reference}</dd>
                  <dt>Package</dt><dd>{result.package_title}</dd>
                  <dt>When</dt><dd>{fmtWhen(result.start_at)}</dd>
                  <dt>Paid</dt><dd>{result.amount}</dd>
                  {result.meet_link && (<><dt>Meeting</dt><dd><a href={result.meet_link} target="_blank" rel="noopener noreferrer">Join Google Meet</a></dd></>)}
                </dl>
                <p className="bk-note">Need another time? Use the reschedule link in your email (up to {config?.reschedule_cutoff_hours ?? 12} hours before).</p>
                <Link to="/aicoderescue" className="bk-btn bk-btn-outline">Back to AI Code Rescue</Link>
              </div>
            )}

            {step === "error" && (
              <div className="bk-result bk-result-error">
                <XCircle size={56} />
                <h2>{result?.status === "needs_attention" ? "Payment received – we'll be in touch" : "Booking not completed"}</h2>
                <p>{failMessage}</p>
                {result?.status !== "needs_attention" && (
                  <button type="button" className="bk-btn bk-btn-primary" onClick={restart}>Try again</button>
                )}
                <p className="bk-note">Questions? Email <a href="mailto:contact@perfectwebservices.com">contact@perfectwebservices.com</a>.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
