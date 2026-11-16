import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dayKey = (d, tz) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);

const NARROW = "(max-width: 575px)";

/**
 * Day + time picker in the visitor's own timezone.
 * - slots:   free times (UTC ISO strings) — clickable
 * - taken:   booked/blocked times — shown greyed out with a "Booked" badge
 * - current: the customer's existing booking (reschedule page) — marked "Your booking"
 * - value:   the selected time
 */
export default function SlotPicker({ slots, taken = [], current = null, value, onChange, timezone }) {
  const tz = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

  const days = useMemo(() => {
    const status = new Map();
    for (const iso of taken) status.set(iso, "taken");
    for (const iso of slots) status.set(iso, "free");
    if (current) status.set(current, "current");

    const map = new Map();
    [...status.keys()]
      .sort((a, b) => new Date(a) - new Date(b))
      .forEach((iso) => {
        const d = new Date(iso);
        const key = dayKey(d, tz);
        if (!map.has(key)) map.set(key, { key, date: d, times: [], free: 0 });
        const day = map.get(key);
        day.times.push({ iso, status: status.get(iso) });
        if (status.get(iso) === "free") day.free += 1;
      });
    return [...map.values()];
  }, [slots, taken, current, tz]);

  const [active, setActive] = useState(null);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(() => (window.matchMedia?.(NARROW).matches ? 3 : 5));

  useEffect(() => {
    const mq = window.matchMedia?.(NARROW);
    if (!mq) return undefined;
    const onChange = () => {
      const n = mq.matches ? 3 : 5;
      setPerPage(n);
      setOffset((o) => Math.floor(o / n) * n);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Open on the selected time, else the customer's current booking, else the first day with a free time.
  useEffect(() => {
    if (!days.length) return;
    const focus = value || current;
    let idx = focus ? days.findIndex((d) => d.key === dayKey(new Date(focus), tz)) : -1;
    if (idx < 0 && active) idx = days.findIndex((d) => d.key === active);
    if (idx < 0) idx = Math.max(0, days.findIndex((d) => d.free > 0));
    setActive(days[idx].key);
    setOffset(Math.floor(idx / perPage) * perPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, current]);

  if (!days.some((d) => d.free > 0) && !current) {
    return <p className="bk-empty">No times are free right now. Please check back soon or contact us.</p>;
  }

  const fmtDay = new Intl.DateTimeFormat("en-GB", { timeZone: tz, weekday: "short" });
  const fmtDate = new Intl.DateTimeFormat("en-GB", { timeZone: tz, day: "numeric", month: "short" });
  const fmtTime = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "numeric", minute: "2-digit", hour12: true });
  const day = days.find((d) => d.key === active) || days[0];
  const visible = days.slice(offset, offset + perPage);

  return (
    <div className="bk-slots">
      <div className="bk-days" role="tablist" aria-label="Choose a day">
        <button type="button" className="bk-nav" onClick={() => setOffset(Math.max(0, offset - perPage))} disabled={offset === 0} aria-label="Earlier days">
          <ChevronLeft size={18} />
        </button>
        <div className="bk-days-row" style={{ gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))` }}>
          {visible.map((d) => (
            <button
              type="button"
              role="tab"
              aria-selected={d.key === day.key}
              key={d.key}
              className={`bk-day ${d.key === day.key ? "is-active" : ""} ${d.free === 0 ? "is-full" : ""}`}
              onClick={() => setActive(d.key)}
            >
              <span>{fmtDay.format(d.date)}</span>
              <strong>{fmtDate.format(d.date)}</strong>
              <small>{d.free > 0 ? `${d.free} free` : "Fully booked"}</small>
            </button>
          ))}
        </div>
        <button type="button" className="bk-nav" onClick={() => setOffset(offset + perPage)} disabled={offset + perPage >= days.length} aria-label="Later days">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="bk-times" role="radiogroup" aria-label="Choose a time">
        {day.times.map(({ iso, status }) => {
          const label = fmtTime.format(new Date(iso));
          if (status !== "free") {
            const badge = status === "current" ? "Your booking" : "Booked";
            return (
              <div key={iso} className={`bk-time is-${status}`} aria-disabled="true" aria-label={`${label}, ${badge}`}>
                <span className="bk-time-label">{label}</span>
                <span className="bk-time-badge">{badge}</span>
              </div>
            );
          }
          return (
            <button
              type="button"
              role="radio"
              aria-checked={value === iso}
              key={iso}
              className={`bk-time ${value === iso ? "is-active" : ""}`}
              onClick={() => onChange(iso)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <p className="bk-tz">Times shown in your timezone: <strong>{tz.replace(/_/g, " ")}</strong></p>
    </div>
  );
}
