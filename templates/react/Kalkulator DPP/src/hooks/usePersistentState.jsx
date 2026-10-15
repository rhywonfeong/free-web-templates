import { useCallback, useState } from "react";

export function usePersistentState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const updateState = useCallback(
    (value) => {
      setState((prev) => {
        const nextValue = typeof value === "function" ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(nextValue));
        } catch {
          // ignore storage errors
        }
        return nextValue;
      });
    },
    [key]
  );

  return [state, updateState];
}