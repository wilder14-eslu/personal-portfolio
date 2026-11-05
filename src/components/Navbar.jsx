import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import usePortfolio from "../lib/usePortfolio";

export default function Navbar() {
  const { navLinks, ui, lang, i18n } = usePortfolio();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id === "home" ? "" : entry.target.id);
      });
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    ["home", ...navLinks.map((nav) => nav.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [navLinks]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  const changeLanguage = () => {
    const next = lang === "es" ? "en" : "es";
    i18n.changeLanguage(next);
    const url = new URL(window.location.href);
    if (url.searchParams.has("lng")) {
      url.searchParams.set("lng", next);
      window.history.replaceState(null, "", url);
    }
  };
  return (
    <header className="site-header">
      <nav className="container navbar" aria-label={ui.navigation}>
        <a href="#home" className="brand" aria-label="Wilder Espinoza — Home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">w<span>.</span></span>
          <span>Wilder Espinoza<span className="brand-role">DATA & MACHINE LEARNING</span></span>
        </a>
        <div id="navigation-links" className={`nav-links${open ? " is-open" : ""}`}>
          {navLinks.map((nav) => (
            <a key={nav.id} href={`#${nav.id}`} aria-current={active === nav.id ? "location" : undefined}
              onClick={() => { setActive(nav.id); setOpen(false); }}>
              {nav.title}{nav.id === "contactMe" && <FiArrowUpRight aria-hidden="true" />}
            </a>
          ))}
        </div>
        <div className="nav-controls">
          <button type="button" className="language-button" onClick={changeLanguage} aria-label={ui.language}>
            <span className={lang === "es" ? "selected" : ""}>ES</span><span aria-hidden="true" className="language-divider">/</span><span className={lang === "en" ? "selected" : ""}>EN</span>
          </button>
          <button type="button" ref={menuButton} className="menu-button" aria-controls="navigation-links"
            aria-expanded={open} aria-label={open ? ui.closeMenu : ui.openMenu} onClick={() => setOpen(!open)}>
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
