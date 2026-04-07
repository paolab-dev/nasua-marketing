"use client";
import { useRef, useEffect, MutableRefObject } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

interface TurnstileCaptchaProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  resetRef?: MutableRefObject<(() => void) | null>;
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

const TurnstileCaptcha = ({ onVerify, onError, onExpire, resetRef }: TurnstileCaptchaProps) => {
  const ref = useRef<TurnstileInstance>(null);

  useEffect(() => {
    if (resetRef) {
      resetRef.current = () => {
        ref.current?.reset();
      };
    }
  }, [resetRef]);

  if (!SITE_KEY) {
    console.warn("NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set.");
    return null;
  }

  return (
    <div className="flex justify-center my-2">
      <Turnstile
        ref={ref}
        siteKey={SITE_KEY}
        onSuccess={onVerify}
        onError={onError}
        onExpire={onExpire}
        options={{ theme: "auto", refreshExpired: "auto" }}
      />
    </div>
  );
};

export default TurnstileCaptcha;
