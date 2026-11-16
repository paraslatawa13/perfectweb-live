import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CalendarClock, CheckCircle2, Loader2, Lock, Video, XCircle } from "lucide-react";
import { bookingApi, apiError } from "../api/bookingApi";
import SlotPicker from "../components/Booking/SlotPicker";
import "../styles/booking.css";

const USER_TZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
const fmtWhen = (iso) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: USER_TZ, weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true,
  }).format(new Date(iso));

/** Page behind the "Reschedule my booking" link in confirmation emails. */
export default function ManageBooking() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [slots, setSlots] = useState([]);
  const [choice, setChoice] = useState("");
  const [loadError, setLoadError] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    bookingApi
      .manage(token)
      .then((d) => {
        setData(d);
        if (d.can_reschedule) bookingApi.slots().then(setSlots).catch(() => {});
      })
      .catch((e) => setLoadError(apiError(e, "This link is not valid.")));
  }, [token]);

  const submit = async () => {
    if (!choice || busy) return;
    setBusy(true);
    setError("");
    try {
      const r = await bookingApi.reschedule(token, { start_at: choice, timezone: USER_TZ });
      setData((d) => ({ ...d, booking: { ...d.booking, ...r.booking } }));
      setDone(r.message);
      setChoice("");
      // The old link no longer works; switch to the new one quietly.
      navigate(`/booking/manage/${r.new_token}`, { replace: true });
    } catch (e) {
      setError(apiError(e));
      if (e?.response?.data?.code === "slot_taken") {
        setChoice("");
        bookingApi.slots().then(setSlots).catch(() => {});
      }
    } finally {
      setBusy(false);
    }
  };

  const b = data?.booking;

  return (
    <main className="bk-page">
      <Helmet>
        <title>Manage your booking | Perfect Web Services</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container bk-narrow">
        {!data && !loadError && <div className="bk-card bk-result"><Loader2 className="bk-spin" size={40} /><p>Loading your booking…</p></div>}

        {loadError && (
          <div className="bk-card bk-result bk-result-error">
            <XCircle size={52} />
            <h2>Link not valid</h2>
            <p>{loadError}</p>
            <p className="bk-note">Each time a booking changes we send a new link and the old one stops working. Check your most recent email, or contact <a href="mailto:contact@perfectwebservices.com">contact@perfectwebservices.com</a>.</p>
          </div>
        )}

        {b && (
          <div className="bk-card">
            <span className="bk-eyebrow">Booking {b.reference}</span>
            <h1 className="bk-title">Hi {b.name}, here's your session</h1>

            <div className="bk-current">
              <CalendarClock size={22} />
              <div>
                <strong>{fmtWhen(b.start_at)}</strong>
                <small>{b.package_title} · your timezone ({USER_TZ.replace(/_/g, " ")})</small>
              </div>
            </div>
            {b.meet_link && (
              <a className="bk-btn bk-btn-navy" href={b.meet_link} target="_blank" rel="noopener noreferrer"><Video size={18} /> Join Google Meet</a>
            )}

            {done && <div className="bk-banner bk-banner-success"><CheckCircle2 size={18} /> {done}</div>}
            {error && <div className="bk-banner bk-banner-error" role="alert">{error}</div>}

            {data.can_reschedule ? (
              <>
                <h2 className="bk-h2">Choose a new time</h2>
                <SlotPicker slots={slots} value={choice} onChange={setChoice} />
                <button type="button" className="bk-btn bk-btn-primary" disabled={!choice || busy} onClick={submit}>
                  {busy ? "Moving your booking…" : choice ? `Move to ${fmtWhen(choice)}` : "Pick a time above"}
                </button>
                <p className="bk-note">You can reschedule up to {data.cutoff_hours} hours before the session. Bookings can't be cancelled.</p>
              </>
            ) : (
              <div className="bk-banner bk-banner-info">
                <Lock size={18} />
                <span>
                  {b.status === "confirmed"
                    ? `This booking can no longer be changed online (less than ${data.cutoff_hours} hours to go). Email contact@perfectwebservices.com if something urgent comes up.`
                    : "This booking can't be changed online. Please contact us."}
                </span>
              </div>
            )}

            <Link to="/aicoderescue" className="bk-link mt-3 d-inline-block">Back to AI Code Rescue</Link>
          </div>
        )}
      </div>
    </main>
  );
}
