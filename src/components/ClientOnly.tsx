"use client";
import { useEffect, useState, ReactNode, CSSProperties } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  /** Minimum height to reserve space while client renders */
  minHeight?: string | number;
  /** Optional className for the placeholder */
  placeholderClassName?: string;
}

export const ClientOnly = ({ children, minHeight = '1rem', placeholderClassName }: ClientOnlyProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return <>{children}</>;
  }

  const style: CSSProperties = {
    minHeight,
  };

  return <div style={style} className={placeholderClassName} />;
};
