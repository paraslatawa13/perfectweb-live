import { useEffect, useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Lock, Clock } from "lucide-react";

/** Stripe Payment Element plus a countdown for how long the slot is held. */
export default function PaymentStep({ reference, amountLabel, holdExpiresAt, onPaid, onExpired, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [left, setLeft] = useState(() => Math.max(0, Math.floor((new Date(holdExpiresAt) - Date.now()) / 1000)));

  useEffect(() => {
    const t = setInterval(() => {
      const s = Math.max(0, Math.floor((new Date(holdExpiresAt) - Date.now()) / 1000));
      setLeft(s);
      if (s === 0) {
        clearInterval(t);
        onExpired();
      }
    }, 1000);
    return () => clearInterval(t);
  }, [holdExpiresAt, onExpired]);

  const pay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || busy) return;
    setBusy(true);
    setError("");
    const returnUrl = `${window.location.origin}${window.location.pathname}?ref=${encodeURIComponent(reference)}`;
    const { error: err, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: returnUrl },
      redirect: "if_required",
    });
    if (err) {
      setBusy(false);
      if (err.type === "card_error" || err.type === "validation_error") {
        setError(err.message);
      } else {
        onError(err.message || "Payment failed. You have not been charged.");
      }
      return;
    }
    if (paymentIntent && ["succeeded", "processing"].includes(paymentIntent.status)) {
      onPaid(paymentIntent.id);
    } else {
      setBusy(false);
      setError("Payment was not completed. Please try again.");
    }
  };

  const mm = Math.floor(left / 60);
  const ss = String(left % 60).padStart(2, "0");

  return (
    <form className="bk-pay" onSubmit={pay}>
      <div className={`bk-hold ${left < 120 ? "is-low" : ""}`}>
        <Clock size={16} /> Your time is held for <strong>{mm}:{ss}</strong>
      </div>
      <PaymentElement options={{ layout: "tabs" }} />
      {error && <p className="bk-error" role="alert">{error}</p>}
      <button type="submit" className="bk-btn bk-btn-primary" disabled={!stripe || busy}>
        {busy ? "Processing…" : `Pay ${amountLabel} & confirm booking`}
      </button>
      <p className="bk-secure"><Lock size={14} /> Secure payment by Stripe. We never see your card details.</p>
    </form>
  );
}
