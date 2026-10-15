import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Drives the page-load hero timeline.
 *
 * The animation starts when the hero photograph has decoded so the Ken Burns
 * settle, mist drift, and text reveals land on a real image instead of an
 * empty box. If the network is slow we still start after a short grace period
 * so the copy is never held hostage by the asset.
 */
export default function useHeroReady(graceMs = 1400) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [ready, setReady] = useState(false);

  const markReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setReady(true);
      return;
    }
    const timer = window.setTimeout(() => setReady(true), graceMs);
    return () => window.clearTimeout(timer);
  }, [graceMs]);

  return { ready, imgRef, onLoad: markReady };
}
