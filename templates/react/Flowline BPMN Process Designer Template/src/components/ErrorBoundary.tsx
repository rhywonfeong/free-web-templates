import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

/**
 * A render-time throw in React 18 unmounts the whole tree. Without a boundary
 * the user is left staring at an empty <div id="root"> — indistinguishable
 * from a broken deploy. This turns that silent failure into a readable panel.
 */

type Props = { children: ReactNode };
type State = { error: Error | null };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Keep the original stack reachable from the console for debugging.
    console.error("Flowline crashed while rendering:", error, info.componentStack);
  }

  handleReload = () => {
    this.setState({ error: null });
    window.location.reload();
  };

  render() {
    const { error } = this.state;

    if (!error) return this.props.children;

    return (
      <div className="crash">
        <div className="crash__card">
          <span className="crash__badge">Runtime error</span>
          <h1 className="crash__title">Flowline could not render this view</h1>
          <p className="crash__text">
            The app loaded correctly, so this is not a publishing problem — a component threw
            while rendering. The message below is the actual cause.
          </p>
          <pre className="crash__pre mono">{error.message || String(error)}</pre>
          <button type="button" className="btn btn--dark" onClick={this.handleReload}>
            Reload the app
          </button>
        </div>
      </div>
    );
  }
}
