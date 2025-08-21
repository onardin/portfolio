import { useState, useEffect } from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function () {
  // Theme (light/dark) with persistence + system default
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch { return 'light'; }
  });

  // Modal state for click-to-zoom cards
  const [activeCard, setActiveCard] = useState(null);

  // Close on Escape + lock body scroll when open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveCard(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.classList.toggle('modal-open', Boolean(activeCard));
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [activeCard]);

  // Apply theme to <html> and persist to localStorage
  useEffect(() => {
    const root = document.documentElement; // <html>
    root.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  // (Optional) follow system changes if user hasn't explicitly chosen
  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (!mq || !mq.addEventListener) return;
    const handler = (e) => {
      const saved = localStorage.getItem('theme');
      if (!saved) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="main-container">
      {/* Theme toggle */}
      <button
        className="theme-toggle"
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className={activeCard ? "page-content blurred" : "page-content"}>
        <div className="page-content-row">
          <div className="profile-section">
            <div className="section-box">
              <Profile />
            </div>
          </div>
          <div className="content-wrapper">
            <main className="content-section">
              <div
                className="section-box section-card"
                role="button"
                tabIndex={0}
                onClick={() => setActiveCard('about')}
                onKeyDown={(e) => e.key === 'Enter' && setActiveCard('about')}
              >
                <About />
              </div>

              <div
                className="section-box section-card"
                role="button"
                tabIndex={0}
                onClick={() => setActiveCard('experience')}
                onKeyDown={(e) => e.key === 'Enter' && setActiveCard('experience')}
              >
                <Experience />
              </div>

              <div
                className="section-box section-card"
                role="button"
                tabIndex={0}
                onClick={() => setActiveCard('projects')}
                onKeyDown={(e) => e.key === 'Enter' && setActiveCard('projects')}
              >
                <Projects />
              </div>
            </main>
          </div>
        </div>
      </div>

      {activeCard && (
        <>
          <div className="backdrop" onClick={() => setActiveCard(null)} />
          <div className="card-modal" role="dialog" aria-modal="true" aria-label={activeCard}>
            {activeCard === 'about' && <About />}
            {activeCard === 'experience' && <Experience />}
            {activeCard === 'projects' && <Projects />}
          </div>
        </>
      )}
    </div>
  )
}
