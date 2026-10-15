import { useEffect, useRef, useState } from "react";
import clsx from "../utils/clsx";

export default function SectionReveal({ children, className = "", id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={clsx("fade-section", visible && "visible", className)}
    >
      {children}
    </section>
  );
}