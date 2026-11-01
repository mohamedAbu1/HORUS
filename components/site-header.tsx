"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export type SiteSection = "home" | "about" | "collections" | "process" | "materials" | "contact";

const navItems: Array<{ label: string; key: SiteSection; href: string }> = [
  { label: "HOME", key: "home", href: "/" },
  { label: "ABOUT", key: "about", href: "/#about" },
  { label: "COLLECTIONS", key: "collections", href: "/collections" },
  { label: "PROCESS", key: "process", href: "/process" },
  { label: "MATERIALS", key: "materials", href: "/#materials" },
  { label: "CONTACT", key: "contact", href: "/contact" },
];

export function SiteHeader({ active = "home" }: { active?: SiteSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        {/* Native anchors keep navigation reliable in the current Vinext runtime. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="site-brand" aria-label="Horus home">
          <span className="site-brand-name">HORUS</span>
          <span className="site-brand-subtitle">ALABASTER ATELIER</span>
        </a>

        <nav className="site-desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className={active === item.key ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-tools">
          <button type="button" className="site-search-button" onClick={() => setSearchOpen((value) => !value)} aria-label="Toggle search">
            <Search size={18} strokeWidth={1.25} />
          </button>
          <a href="/contact" className="site-contact-dot" aria-label="Open contact page"><span>o</span></a>
          <button type="button" className="site-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} strokeWidth={1.2} /> : <Menu size={20} strokeWidth={1.2} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="site-search-panel">
          <Search size={15} />
          <input autoFocus type="search" placeholder="Search the atelier" aria-label="Search the atelier" />
          <span>ESC</span>
        </div>
      )}

      {menuOpen && (
        <nav className="site-mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} onClick={closeMenu} className={active === item.key ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
