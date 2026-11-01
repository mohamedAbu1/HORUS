"use client";

import Image from "next/image";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const steps = [
  { number: "01", title: "SELECT", image: "/images/process-select.png", alt: "Raw alabaster selected from the quarry" },
  { number: "02", title: "SHAPE", image: "/images/process-shape.png", alt: "A craftsperson shaping alabaster with a hammer and chisel" },
  { number: "03", title: "REFINE", image: "/images/process-refine.png", alt: "A smooth alabaster surface being refined by hand" },
  { number: "04", title: "PLACE", image: "/images/process-place.png", alt: "A finished alabaster bowl placed in an interior" },
];

export default function ProcessPage() {
  return (
    <main id="top" className="process-page">
      <SiteHeader active="process" />

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

      <SiteFooter />
    </main>
  );
}
