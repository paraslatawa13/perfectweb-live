import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dayKey = (d, tz) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);

/**
 * Shows free slots (UTC ISO strings from the server) grouped by day in the
 * visitor's own timezone. `value` is the selected ISO string.
 */
export default function SlotPicker({ slots, value, onChange, timezone }) {
  const tz = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

  const days = useMemo(() => {
    const map = new Map();
    for (const iso of slots) {
      const d = new Date(iso);
      const key = dayKey(d, tz);
      if (!map.has(key)) map.set(key, { key, date: d, times: [] });
      map.get(key).times.push(iso);
    }
    return [...map.values()];
  }, [slots, tz]);

  const [active, setActive] = useState(null);
  const [offset, setOffset] = useState(0);
  const narrowQuery = "(max-width: 575px)";
  const [perPage, setPerPage] = useState(() => (window.matchMedia?.(narrowQuery).matches ? 3 : 5));

  useEffect(() => {
    const mq = window.matchMedia?.(narrowQuery);
    if (!mq) return undefined;
    const onChange = () => {
      const n = mq.matches ? 3 : 5;
      setPerPage(n);
      setOffset((o) => Math.floor(o / n) * n);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!days.length) return;
    const selectedDay = value ? dayKey(new Date(value), tz) : null;
    const idx = Math.max(0, days.findIndex((d) => d.key === (selectedDay || active)));
    setActive(days[idx].key);
    setOffset(Math.floor(idx / perPage) * perPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  if (!days.length) {
    return <p className="bk-empty">No times are free right now. Please check back soon or contact us.</p>;
  }

  const fmtDay = new Intl.DateTimeFormat("en-GB", { timeZone: tz, weekday: "short" });
  const fmtDate = new Intl.DateTimeFormat("en-GB", { timeZone: tz, day: "numeric", month: "short" });
  const fmtTime = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "numeric", minute: "2-digit", hour12: true });
  const current = days.find((d) => d.key === active) || days[0];
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
              aria-selected={d.key === current.key}
              key={d.key}
              className={`bk-day ${d.key === current.key ? "is-active" : ""}`}
              onClick={() => setActive(d.key)}
            >
              <span>{fmtDay.format(d.date)}</span>
              <strong>{fmtDate.format(d.date)}</strong>
              <small>{d.times.length} free</small>
            </button>
          ))}
        </div>
        <button type="button" className="bk-nav" onClick={() => setOffset(offset + perPage)} disabled={offset + perPage >= days.length} aria-label="Later days">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="bk-times" role="radiogroup" aria-label="Choose a time">
        {current.times.map((iso) => (
          <button
            type="button"
            role="radio"
            aria-checked={value === iso}
            key={iso}
            className={`bk-time ${value === iso ? "is-active" : ""}`}
            onClick={() => onChange(iso)}
          >
            {fmtTime.format(new Date(iso))}
          </button>
        ))}
      </div>
      <p className="bk-tz">Times shown in your timezone: <strong>{tz.replace(/_/g, " ")}</strong></p>
    </div>
  );
}
