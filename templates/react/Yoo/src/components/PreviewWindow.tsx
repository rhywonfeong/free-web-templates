import { ReactNode } from "react";

export default function PreviewWindow({
  children,
  title = "Roblox · Preview",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="preview">
      <div className="preview-bar">
        <span className="dots">
          <i className="dot dot-r" />
          <i className="dot dot-y" />
          <i className="dot dot-g" />
        </span>
        <span className="preview-title">{title}</span>
      </div>
      <div className="preview-canvas">{children}</div>
    </div>
  );
}
