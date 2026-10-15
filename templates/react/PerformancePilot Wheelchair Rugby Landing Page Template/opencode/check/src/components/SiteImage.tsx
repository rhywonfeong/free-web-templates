import { useState } from "react";

type SiteImageProps = {
  src: string;
  /** Optional secondary source used only if the primary asset fails to load. */
  fallbackSrc?: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Fills its positioned parent (figure) edge-to-edge, mirroring the original
 * `fill` image behaviour. If the self-hosted asset cannot be decoded the
 * component swaps to the fallback source so no broken image is ever shown.
 */
export default function SiteImage({ src, fallbackSrc, alt, priority = false, sizes }: SiteImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      className="site-image"
      src={currentSrc}
      alt={alt}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
