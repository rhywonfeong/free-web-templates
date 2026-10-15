/**
 * Shared hero photography for the public homepage concepts.
 *
 * "Caregiver and Wheelchair User by a Misty Shore" - backlit silhouettes on
 * a wooden boardwalk with mist rising over the water. 3:4 portrait.
 */
const base =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f05ddc4-b1b6-4af2-952d-1421dcee230f_3840w.png";

export const shorePhoto = {
  src: `${base}?w=800&q=80`,
  srcSet: `${base}?w=800&q=80 800w, ${base}?w=1600&q=80 1600w, ${base} 3840w`,
  alt: "Backlit silhouettes of a caregiver standing beside a wheelchair user on a wooden boardwalk, with mist rising off the water beneath a dark tree-lined ridge.",
  width: 1200,
  height: 1600,
};

export const heroCopy = {
  brand: "PerformancePilot Wheelchair Rugby",
  primaryCta: { label: "Support the team", to: "/donate" },
  secondaryCta: { label: "Explore the season", to: "/schedule" },
};

export type HeadingLevel = "h1" | "h2";
