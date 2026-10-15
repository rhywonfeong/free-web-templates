import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { NAV_ITEMS } from "../lib/shell";
import { PROCESS } from "../lib/process";

type Props = {
  onOpenSidebar: () => void;
  onOpenProps: () => void;
};

export default function TopBar({ onOpenSidebar, onOpenProps }: Props) {
  const { pathname } = useLocation();
  const onDesigner = pathname === "/";

  return (
    <header className="topbar">
      {onDesigner && (
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="Open elements"
          className="icon-btn topbar__menu"
        >
          <Icon name="panel-left" size={20} />
        </button>
      )}

      <NavLink to="/" className="brand" aria-label="Flowline home">
        <span className="brand__mark">
          <Icon name="workflow" size={16} strokeWidth={2} />
        </span>
        <span className="brand__name">Flowline</span>
      </NavLink>

      <div className="breadcrumb">
        <span className="breadcrumb__muted">Operations</span>
        <Icon name="chevron-right" size={14} className="breadcrumb__sep" />
        <span className="breadcrumb__current">{PROCESS.name}</span>
        <span className="chip-mono">v{PROCESS.version}</span>
      </div>

      <nav className="mainnav" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `mainnav__link${isActive ? " is-active" : ""}`}
          >
            <Icon name={item.icon} size={16} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="topbar__actions">
        {onDesigner && (
          <div className="btn-group">
            <button type="button" aria-label="Undo" className="icon-btn icon-btn--sm">
              <Icon name="undo-2" size={16} />
            </button>
            <button type="button" aria-label="Redo" className="icon-btn icon-btn--sm">
              <Icon name="redo-2" size={16} />
            </button>
          </div>
        )}

        <NavLink to="/publish" className="btn btn--ghost">
          <Icon name="shield-check" size={16} />
          Validate
        </NavLink>

        <NavLink to="/publish" className="btn btn--dark">
          <Icon name="rocket" size={16} />
          <span className="deploy__label">Deploy</span>
        </NavLink>

        {onDesigner && (
          <button
            type="button"
            onClick={onOpenProps}
            aria-label="Open properties"
            className="icon-btn props-toggle"
          >
            <Icon name="panel-right" size={20} />
          </button>
        )}

        <div className="avatars">
          <span className="avatar avatar--a">AM</span>
          <span className="avatar avatar--b">KT</span>
          <span className="avatar avatar--c">+3</span>
        </div>
      </div>
    </header>
  );
}
