import { Link } from "react-router-dom";

type SiteBrandProps = {
  variant?: "header" | "footer";
};

/** Brand mark shown beside the wordmark in the header and footer. */
export const brandMark =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd209f65-975f-4b50-9fdb-fe680762cfcd_320w.jpg";

export default function SiteBrand({ variant = "header" }: SiteBrandProps) {
  return (
    <Link
      className={variant === "footer" ? "site-brand site-brand--footer" : "site-brand"}
      to="/"
      aria-label="PerformancePilot home"
    >
      <img alt="" aria-hidden="true" width="42" height="42" className="site-brand__mark" src={brandMark} />
      <span className="site-brand__text">
        <strong>PerformancePilot</strong>
        <span>Wheelchair Rugby</span>
      </span>
    </Link>
  );
}
