import { useEffect, useRef, MutableRefObject } from "react";
import { Turnstile, TurnstileInstance } from "react-turnstile";

interface TurnstileCaptchaProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  resetRef?: MutableRefObject<(() => void) | null>;
}

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

const TurnstileCaptcha = ({ onVerify, onError, onExpire, resetRef }: TurnstileCaptchaProps) => {
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  useEffect(() => {
    if (resetRef) {
      resetRef.current = () => {
        turnstileRef.current?.reset();
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
        ref={turnstileRef}
        sitekey={SITE_KEY}
        onVerify={onVerify}
        onError={onError}
        onExpire={onExpire}
        theme="auto"
        refreshExpired="auto"
      />
    </div>
  );
};

export default TurnstileCaptcha;
