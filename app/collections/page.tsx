"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
];

const collections = [
  {
    title: "Architectural slabs",
    image: "/images/collection-slabs.png",
    alt: "Architectural alabaster slabs in a dark gallery",
  },
  {
    title: "Sculptural forms",
    image: "/images/collection-sculptural.png",
    alt: "Flowing alabaster sculpture in a gallery",
  },
  {
    title: "Luminous objects",
    image: "/images/collection-luminous.png",
    alt: "Luminous alabaster objects on dark plinths",
  },
];

function BrandMark() {
  return (
    <Link href="/" className="collections-brand" aria-label="Horus home">
      <span className="collections-brand-name">HORUS</span>
      <span className="collections-brand-subtitle">ALABASTER ATELIER</span>
    </Link>
  );
}

export default function CollectionsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="collections-page">
      <header className="collections-nav">
        <div className="collections-nav-inner">
          <BrandMark />
          <nav className="collections-desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={item.label === "COLLECTIONS" ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="collections-tools">
            <button type="button" className="collections-search-button" onClick={() => setSearchOpen((value) => !value)} aria-label="Toggle search">
              <Search size={18} strokeWidth={1.25} />
            </button>
            <button type="button" className="collections-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} strokeWidth={1.2} /> : <Menu size={20} strokeWidth={1.2} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="collections-search-panel">
            <Search size={15} />
            <input autoFocus type="search" placeholder="Search the atelier" aria-label="Search the atelier" />
            <span>ESC</span>
          </div>
        )}

        {menuOpen && (
          <nav className="collections-mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className={item.label === "COLLECTIONS" ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <section className="collections-content">
        <div className="collections-heading">
          <h1>COLLECTIONS</h1>
          <p>Made for the lasting view.</p>
        </div>

        <div className="collections-card-grid">
          {collections.map((collection) => (
            <Link href="/#contact" key={collection.title} className="collections-card">
              <Image src={collection.image} alt={collection.alt} fill sizes="(max-width: 760px) 100vw, 33vw" className="collections-card-image" />
              <div className="collections-card-overlay" />
              <div className="collections-card-copy">
                <h2>{collection.title}</h2>
                <span className="collections-card-rule" />
                <span className="collections-card-cta">Explore collection <span>→</span></span>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="collections-project-button">Start a project <span>→</span></Link>
      </section>
    </main>
  );
}
