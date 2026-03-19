import { useEffect, useRef, MutableRefObject } from "react";
import Turnstile from "react-turnstile";

interface TurnstileCaptchaProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  resetRef?: MutableRefObject<(() => void) | null>;
}

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

const TurnstileCaptcha = ({ onVerify, onError, onExpire, resetRef }: TurnstileCaptchaProps) => {
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (resetRef) {
      resetRef.current = () => {
        if (widgetIdRef.current && (window as any).turnstile) {
          (window as any).turnstile.reset(widgetIdRef.current);
        }
      };
    }
  }, [resetRef]);

  if (!SITE_KEY) {
    console.warn("VITE_TURNSTILE_SITE_KEY is not set. Captcha widget will not render.");
    return null;
  }

  return (
    <div className="flex justify-center my-2">
      <Turnstile
        sitekey={SITE_KEY}
        onVerify={onVerify}
        onError={onError}
        onExpire={onExpire}
        theme="auto"
        refreshExpired="auto"
        onWidgetLoad={(widgetId) => {
          widgetIdRef.current = widgetId;
        }}
      />
    </div>
  );
};

export default TurnstileCaptcha;
