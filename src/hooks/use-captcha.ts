import { useState, useCallback, useRef } from "react";

export function useCaptcha() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const resetRef = useRef<(() => void) | null>(null);

  const onVerify = useCallback((token: string) => {
    setCaptchaToken(token);
    setIsVerified(true);
  }, []);

  const onError = useCallback(() => {
    setCaptchaToken(null);
    setIsVerified(false);
  }, []);

  const onExpire = useCallback(() => {
    setCaptchaToken(null);
    setIsVerified(false);
  }, []);

  const resetCaptcha = useCallback(() => {
    setCaptchaToken(null);
    setIsVerified(false);
    resetRef.current?.();
  }, []);

  return {
    captchaToken,
    isVerified,
    onVerify,
    onError,
    onExpire,
    resetCaptcha,
    resetRef,
  };
}
