"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem("amos-theme", next ? "dark" : "light"); } catch { /* Theme still works when storage is unavailable. */ }
  }

  return <button type="button" className="theme-toggle" aria-label="Dark mode" aria-pressed={dark} onClick={toggleTheme}>
    <span className="show-in-light" aria-hidden="true">☾ Dark</span>
    <span className="show-in-dark" aria-hidden="true">☀ Light</span>
  </button>;
}
