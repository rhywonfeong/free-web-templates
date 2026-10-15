import { useEffect } from "react";

function isAllowedTarget(target) {
  if (!target || !(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("[data-allow-interaction='true']"));
}

export default function InteractionGuard() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      if (!isAllowedTarget(event.target)) {
        event.preventDefault();
      }
    };

    const handleCopyCut = (event) => {
      if (!isAllowedTarget(event.target)) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const isCopy = (event.ctrlKey || event.metaKey) && key === "c";
      const isCut = (event.ctrlKey || event.metaKey) && key === "x";

      if ((isCopy || isCut) && !isAllowedTarget(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopyCut);
    document.addEventListener("cut", handleCopyCut);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopyCut);
      document.removeEventListener("cut", handleCopyCut);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}