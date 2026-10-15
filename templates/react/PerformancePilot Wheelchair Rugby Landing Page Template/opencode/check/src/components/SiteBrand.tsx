import { Link } from "react-router-dom";

type SiteBrandProps = {
  variant?: "header" | "footer";
};

export default function SiteBrand({ variant = "header" }: SiteBrandProps) {
  return (
    <Link
      className={variant === "footer" ? "site-brand site-brand--footer" : "site-brand"}
      to="/"
      aria-label="PerformancePilot home"
    >
      <img alt="" aria-hidden="true" width="42" height="42" className="site-brand__mark" src="/icon.svg" />
      <span className="site-brand__text">
        <strong>PerformancePilot</strong>
        <span>Wheelchair Rugby</span>
      </span>
    </Link>
  );
}
