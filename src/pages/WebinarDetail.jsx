import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CalendarClock, CheckCircle2, Clock, FileText, Loader2, PlayCircle, Radio } from "lucide-react";
import { webinarApi, apiError } from "../api/bookingApi";
import Turnstile from "../components/Booking/Turnstile";
import "../styles/booking.css";

const USER_TZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function WebinarDetail() {
  const { slug } = useParams();
  const [w, setW] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "" });
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    webinarApi.get(slug).then(setW).catch((e) => setLoadError(apiError(e, "Webinar not found.")));
  }, [slug]);

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your name." : "",
    email: !EMAIL_RE.test(form.email.trim()) ? "Please enter a valid email." : "",
  };

  const submit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (errors.name || errors.email || busy) return;
    if (w.turnstile_site_key && !token) {
      setError("Please complete the security check.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const r = await webinarApi.register(slug, { ...form, turnstile_token: token });
      setDone(r.message);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setBusy(false);
    }
  };

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  if (loadError) {
    return (
      <main className="bk-page"><div className="container bk-narrow">
        <div className="bk-card bk-result bk-result-error"><h2>Webinar not found</h2><p>{loadError}</p><Link to="/resources" className="bk-btn bk-btn-outline">See all resources</Link></div>
      </div></main>
    );
  }
  if (!w) {
    return <main className="bk-page"><div className="container bk-narrow"><div className="bk-card bk-result"><Loader2 className="bk-spin" size={40} /></div></div></main>;
  }

  const when = w.starts_at
    ? new Intl.DateTimeFormat("en-GB", { timeZone: USER_TZ, weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true, timeZoneName: "short" }).format(new Date(w.starts_at))
    : null;
  const isLive = w.type === "live";
  const cta = isLive ? (w.is_upcoming ? "Reserve my seat" : "Get the session materials") : "Get instant access";

  return (
    <main className="bk-page">
      <Helmet>
        <title>{`${w.title} | Webinar | Perfect Web Services`}</title>
        {w.summary && <meta name="description" content={w.summary} />}
      </Helmet>
      <div className="container">
        <Link to="/resources" className="bk-back"><ArrowLeft size={16} /> All resources</Link>
        <div className="bk-grid wb-grid">
          <article className="wb-main">
            <span className={`wb-badge ${isLive ? "is-live" : ""}`}>
              {isLive ? <Radio size={14} /> : <PlayCircle size={14} />} {isLive ? (w.is_upcoming ? "Live webinar" : "Past live session") : "Recorded webinar"}
            </span>
            <h1 className="wb-title">{w.title}</h1>
            {w.summary && <p className="wb-summary">{w.summary}</p>}
            <ul className="bk-facts wb-facts">
              {when && <li><CalendarClock size={18} /> {when}</li>}
              {w.duration_minutes && <li><Clock size={18} /> {w.duration_minutes} minutes</li>}
              {w.documents?.length > 0 && <li><FileText size={18} /> {w.documents.length} downloadable document{w.documents.length > 1 ? "s" : ""}</li>}
            </ul>
            {w.cover_image && <img src={w.cover_image} alt="" className="wb-cover" loading="lazy" />}
            {w.description && <div className="wb-desc" dangerouslySetInnerHTML={{ __html: w.description }} />}
          </article>

          <aside className="bk-card wb-form">
            {done ? (
              <div className="bk-result bk-result-success">
                <CheckCircle2 size={52} />
                <h2>Check your inbox</h2>
                <p>{done}</p>
                <p className="bk-note">Not there in a few minutes? Look in your spam or promotions folder.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h2 className="bk-h2 mt-0">{cta}</h2>
                <p className="bk-note mb-3">
                  Enter your email and we'll send you {isLive ? "the joining link" : "the recording"}
                  {w.documents?.length ? " and the documents" : ""} straight away.
                </p>
                {error && <div className="bk-banner bk-banner-error" role="alert">{error}</div>}
                <label className="bk-field">
                  <span>Name *</span>
                  <input value={form.name} onChange={set("name")} autoComplete="name" maxLength={120} aria-invalid={touched && !!errors.name} />
                  {touched && errors.name && <em>{errors.name}</em>}
                </label>
                <label className="bk-field">
                  <span>Work email *</span>
                  <input type="email" value={form.email} onChange={set("email")} autoComplete="email" maxLength={190} aria-invalid={touched && !!errors.email} />
                  {touched && errors.email && <em>{errors.email}</em>}
                </label>
                <label className="bk-field">
                  <span>Company</span>
                  <input value={form.company} onChange={set("company")} autoComplete="organization" maxLength={150} />
                </label>
                {/* Honeypot for bots: hidden from people and screen readers */}
                <input type="text" name="website" value={form.website} onChange={set("website")} tabIndex={-1} autoComplete="off" aria-hidden="true" className="bk-hp" />
                {w.documents?.length > 0 && (
                  <ul className="wb-docs">
                    {w.documents.map((d) => (<li key={d.title}><FileText size={16} /> {d.title} <small>{d.size}</small></li>))}
                  </ul>
                )}
                <Turnstile siteKey={w.turnstile_site_key} onToken={setToken} />
                <button type="submit" className="bk-btn bk-btn-primary" disabled={busy}>{busy ? "Sending…" : cta}</button>
                <p className="bk-note">We only use your email to send this and related updates. <Link to="/privacy-policy">Privacy policy</Link></p>
              </form>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
