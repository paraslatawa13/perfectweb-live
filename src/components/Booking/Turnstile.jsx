import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadScript() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!window.__turnstileLoading) {
    window.__turnstileLoading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.onload = () => resolve(window.turnstile);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return window.__turnstileLoading;
}

/**
 * Cloudflare Turnstile bot check. Renders nothing when no site key is configured
 * on the server, so forms keep working before the keys are added.
 */
export default function Turnstile({ siteKey, onToken }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!siteKey) return undefined;
    let widgetId;
    let cancelled = false;
    loadScript()
      .then((ts) => {
        if (cancelled || !ref.current) return;
        widgetId = ts.render(ref.current, {
          sitekey: siteKey,
          callback: (t) => onToken(t),
          "expired-callback": () => onToken(null),
          "error-callback": () => onToken(null),
        });
      })
      .catch(() => onToken(null));
    return () => {
      cancelled = true;
      if (widgetId !== undefined && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [siteKey, onToken]);

  if (!siteKey) return null;
  return <div ref={ref} className="bk-turnstile" />;
}
