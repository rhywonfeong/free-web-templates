/** Shared shell contract passed from the layout route down to page routes. */
export type ShellContext = {
  sidebarOpen: boolean;
  propsOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setPropsOpen: (open: boolean) => void;
};

export const NAV_ITEMS = [
  { to: "/", label: "Designer", icon: "workflow", end: true },
  { to: "/export", label: "Export", icon: "download", end: false },
  { to: "/publish", label: "Publish", icon: "rocket", end: false },
] as const;
