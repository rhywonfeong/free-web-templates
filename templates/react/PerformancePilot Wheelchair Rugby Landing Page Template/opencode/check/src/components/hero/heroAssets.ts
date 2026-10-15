/**
 * Shared hero photography for the public homepage concepts.
 *
 * "Caregiver and Wheelchair User by a Misty Shore" - backlit silhouettes on
 * a wooden boardwalk with mist rising over the water. 3:4 portrait.
 */
const base = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72632bb7-f7f4-4c75-a480-347f72d38c89";

export const shorePhoto = {
  src: `${base}_1600w.jpg`,
  srcSet: `${base}_800w.jpg 800w, ${base}_1600w.jpg 1600w, ${base}_3840w.jpg 3840w`,
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
