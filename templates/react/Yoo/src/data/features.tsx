const __auraToastCompatDispatch = (..._args: unknown[]) => undefined;
const __auraToastCompatApi = Object.assign(__auraToastCompatDispatch, {
  toast: __auraToastCompatDispatch,
  success: __auraToastCompatDispatch,
  error: __auraToastCompatDispatch,
  info: __auraToastCompatDispatch,
  warning: __auraToastCompatDispatch,
  dismiss: () => undefined,
});
const toast = __auraToastCompatApi;

export type Feature = {
  title: string;
  summary: string;
  detail: string;
  tag: string;
  icon: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Aimbot + Silent Aim",
    tag: "Combat",
    summary:
      "Hold-to-aim lock, silent aim and a visible FOV circle with adjustable radius and smoothing.",
    detail:
      "Locks to the closest visible head inside your FOV circle. Sliders control the FOV radius and smoothing so it feels natural, not robotic. A silent-aim toggle and on-screen aim circle round out the combat tab.",
    icon: "◎",
  },
  {
    title: "Layered ESP",
    tag: "Visuals",
    summary:
      "Box, Name, Health, Tracer, Distance and Avatar chips — each toggled independently.",
    detail:
      "Six ESP layers render through a single dedicated ScreenGui and one shared render loop, so nothing flickers. Distance shows meters, the avatar layer draws a head-shot chip, and everything clears cleanly the instant you switch it off.",
    icon: "◫",
  },
  {
    title: "Live Ping Meter",
    tag: "HUD",
    summary:
      "A tidy readout that grades your connection from Godly to Rough in real time.",
    detail:
      "Reads the network data ping twice a second and colour-codes it, so you always know whether that missed shot was you — or the server.",
    icon: "◐",
  },
  {
    title: "Lighting: Fullbright · NoFog · X-Ray",
    tag: "Environment",
    summary:
      "Flatten lighting, kill fog and see through walls without wrecking the map.",
    detail:
      "Fullbright lifts ambient lighting to a neutral level. NoFog pushes fog to infinity. X-Ray makes world geometry translucent while keeping players crisp — and each restores its original values on toggle off.",
    icon: "◇",
  },
  {
    title: "Movement Suite",
    tag: "Movement",
    summary:
      "WalkSpeed, JumpPower, Fly, Noclip, Infinite Jump and Spinbot — all with sliders.",
    detail:
      "Full flight with WASD + Space/Shift, tunable walk speed and jump power, collision-free Noclip, endless jumping and a spinbot. Every loop disconnects on toggle so there are no leftover BodyMovers or connections.",
    icon: "◈",
  },
  {
    title: "Player Protection",
    tag: "Player",
    summary:
      "God Mode, Anti-Fling, Anti-AFK and a one-tap character reset.",
    detail:
      "God Mode auto-heals and teleports you out of the void, Anti-Fling clamps runaway velocity, Anti-AFK keeps you from being kicked, and Reset respawns your character instantly.",
    icon: "◆",
  },
  {
    title: "Tabbed Interface",
    tag: "Interface",
    summary:
      "Combat, Visuals, Movement and Player tabs with scrollable, categorized toggles.",
    detail:
      "The window is organised into tabs so nothing gets cut off. Each page scrolls, sliders sit next to their toggles, and the whole thing is draggable and hides on RightShift.",
    icon: "◧",
  },
  {
    title: "Refined Notifications",
    tag: "Interface",
    summary:
      "Soft, stacked toasts with an accent bar and gentle tween in-and-out.",
    detail:
      "Every action confirms with a Claude-styled toast — accent bar, title and description — that animates in, waits, and slides away without piling up.",
    icon: "◉",
  },
];
