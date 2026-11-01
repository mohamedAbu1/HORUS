"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "COLLECTIONS", href: "/#collections" },
  { label: "PROCESS", href: "/process" },
  { label: "MATERIALS", href: "/#materials" },
  { label: "CONTACT", href: "/#contact" },
];

const steps = [
  { number: "01", title: "SELECT", image: "/images/process-select.png", alt: "Raw alabaster selected from the quarry" },
  { number: "02", title: "SHAPE", image: "/images/process-shape.png", alt: "A craftsperson shaping alabaster with a hammer and chisel" },
  { number: "03", title: "REFINE", image: "/images/process-refine.png", alt: "A smooth alabaster surface being refined by hand" },
  { number: "04", title: "PLACE", image: "/images/process-place.png", alt: "A finished alabaster bowl placed in an interior" },
];

function BrandMark() {
  return (
    <Link href="/" className="process-brand" aria-label="Horus home">
      <span className="process-brand-name">HORUS</span>
      <span className="process-brand-subtitle">ALABASTER ATELIER</span>
    </Link>
  );
}

export default function ProcessPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="process-page">
      <header className="process-nav">
        <div className="process-nav-inner">
          <BrandMark />

          <nav className="process-desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={item.label === "PROCESS" ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="process-nav-tools">
            <span className="process-nav-rule" />
            <Link href="/#contact" className="process-dot" aria-label="Open contact section"><span>o</span></Link>
            <button type="button" className="process-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
              {menuOpen ? <X size={19} strokeWidth={1} /> : <Menu size={19} strokeWidth={1} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="process-mobile-menu">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className={item.label === "PROCESS" ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <section className="process-hero">
        <Image src="/images/process-hero.png" alt="Artisan shaping a raw alabaster block" fill priority sizes="100vw" className="process-hero-image" />
        <div className="process-hero-overlay" />
        <div className="process-hero-copy">
          <p className="process-eyebrow">ALABASTER ATELIER</p>
          <h1>THE HORUS<br />PROCESS</h1>
          <span className="process-short-rule" />
          <p className="process-hero-subtitle">From quarry to quiet detail.</p>
        </div>
      </section>

      <section className="process-step-grid" aria-label="The Horus process steps">
        {steps.map((step) => (
          <article key={step.number} className="process-step-card">
            <div className="process-step-heading">
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <span className="process-step-arrow">→</span>
            </div>
            <div className="process-step-image-wrap">
              <Image src={step.image} alt={step.alt} fill sizes="(max-width: 760px) 100vw, 25vw" className="process-step-image" />
            </div>
          </article>
        ))}
      </section>

      <section className="process-editorial">
        <div className="process-editorial-image process-editorial-image-large">
          <Image src="/images/process-refine.png" alt="Close detail of veined alabaster" fill sizes="42vw" className="process-editorial-photo" />
        </div>
        <div className="process-editorial-copy">
          <p className="process-editorial-title">Material, proportion, finish.</p>
          <span className="process-short-rule" />
          <p className="process-editorial-caption">Made in Egypt</p>
        </div>
        <div className="process-editorial-gallery">
          <div className="process-editorial-image process-editorial-image-top">
            <Image src="/images/materials-alabaster.png" alt="Veined alabaster block detail" fill sizes="20vw" className="process-editorial-photo" />
          </div>
          <div className="process-editorial-image process-editorial-image-bottom">
            <Image src="/images/process-place.png" alt="Finished alabaster bowl" fill sizes="20vw" className="process-editorial-photo" />
          </div>
        </div>
      </section>

      <footer className="process-footer">
        <Link href="/#contact">Start a project <ArrowRight size={14} /></Link>
        <span>© 2026 HORUS ALABASTER ATELIER</span>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top ↑</a>
      </footer>
    </main>
  );
}
