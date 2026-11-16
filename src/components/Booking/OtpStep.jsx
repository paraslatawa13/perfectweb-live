import { useEffect, useRef, useState } from "react";
import { MailCheck } from "lucide-react";

/**
 * 6-box code entry with a resend countdown. `secondsLeft` comes from the parent
 * so the timer survives re-renders.
 */
export default function OtpStep({ email, onVerify, onResend, onBack, busy, error, secondsLeft, validMinutes }) {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const refs = useRef([]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const code = digits.join("");

  const setAt = (i, v) => {
    const next = [...digits];
    next[i] = v;
    setDigits(next);
  };

  const handleChange = (i, e) => {
    const v = e.target.value.replace(/\D/g, "");
    if (v.length > 1) {
      // Pasted or autofilled full code.
      const all = v.slice(0, 6).split("");
      const next = ["", "", "", "", "", ""].map((_, k) => all[k] || "");
      setDigits(next);
      refs.current[Math.min(all.length, 5)]?.focus();
      if (all.length === 6) onVerify(all.join(""));
      return;
    }
    setAt(i, v);
    if (v && i < 5) refs.current[i + 1]?.focus();
    if (v && i === 5 && digits.slice(0, 5).every(Boolean)) onVerify(digits.slice(0, 5).join("") + v);
  };

  const handleKey = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < 5) refs.current[i + 1]?.focus();
  };

  return (
    <form
      className="bk-otp"
      onSubmit={(e) => {
        e.preventDefault();
        if (code.length === 6) onVerify(code);
      }}
    >
      <div className="bk-otp-icon"><MailCheck size={30} /></div>
      <h3>Check your email</h3>
      <p>
        We sent a 6-digit code to <strong>{email}</strong>. It's valid for {validMinutes} minutes.
      </p>

      <div className="bk-otp-boxes" role="group" aria-label="Verification code">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => (refs.current[i] = el)}
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={i === 0 ? 6 : 1}
            value={d}
            onChange={(e) => handleChange(i, e)}
            onKeyDown={(e) => handleKey(i, e)}
            aria-label={`Digit ${i + 1}`}
            disabled={busy}
          />
        ))}
      </div>

      {error && <p className="bk-error" role="alert">{error}</p>}

      <button type="submit" className="bk-btn bk-btn-primary" disabled={busy || code.length !== 6}>
        {busy ? "Checking…" : "Verify & continue to payment"}
      </button>

      <div className="bk-otp-foot">
        {secondsLeft > 0 ? (
          <span>Resend code in <strong>0:{String(secondsLeft).padStart(2, "0")}</strong></span>
        ) : (
          <button type="button" className="bk-link" onClick={onResend} disabled={busy}>Resend code</button>
        )}
        <button type="button" className="bk-link" onClick={onBack} disabled={busy}>Change details</button>
      </div>
    </form>
  );
}
