"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const tabs = [
  {
    label: "Architectural slabs",
    title: "Stone library",
    description: "Extraordinary alabaster for architecture, interiors and art.",
    image: "/images/materials-hero.png",
  },
  {
    label: "Sculptural forms",
    title: "Forms in light",
    description: "Quietly sculptural stone for objects that hold a room.",
    image: "/images/collection-sculptural.png",
  },
  {
    label: "Backlit alabaster",
    title: "Light, held in stone",
    description: "Translucent surfaces selected for their glow and movement.",
    image: "/images/materials-alabaster.png",
  },
];

const finishes = [
  { label: "Honed", tone: "#eee4d3" },
  { label: "Polished", tone: "#d7c4a2" },
  { label: "Natural", tone: "#b89a73" },
];

const materials = [
  { name: "Ivory Mist", finish: "Honed", image: "/images/material-ivory-mist.png" },
  { name: "Golden Veil", finish: "Polished", image: "/images/material-golden-veil.png" },
  { name: "Sage Cloud", finish: "Natural", image: "/images/material-sage-cloud.png" },
  { name: "Obsidian Veil", finish: "Polished", image: "/images/material-obsidian-veil.png" },
];

export default function MaterialsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFinish, setActiveFinish] = useState("Honed");
  const selectedTab = tabs[activeTab];

  return (
    <main id="top" className="materials-page">
      <SiteHeader active="materials" />

      <section className="materials-hero">
        <div className="materials-hero-copy">
          <p className="materials-eyebrow">MATERIALS</p>
          <span className="materials-rule" />
          <h1>{selectedTab.title}</h1>
          <p className="materials-hero-description">{selectedTab.description}</p>
        </div>

        <div className="materials-hero-image-wrap">
          <Image src={selectedTab.image} alt={`${selectedTab.label} in the Horus material library`} fill priority sizes="(max-width: 760px) 100vw, 58vw" className="materials-hero-image" />
          <div className="materials-hero-image-shade" />
        </div>

        <div className="materials-tabs" role="tablist" aria-label="Material categories">
          {tabs.map((tab, index) => (
            <button key={tab.label} type="button" role="tab" aria-selected={activeTab === index} className={activeTab === index ? "active" : ""} onClick={() => setActiveTab(index)}>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section className="materials-library" aria-label="Material library">
        <div className="materials-finish-row">
          <div className="materials-finish-options">
            {finishes.map((finish) => (
              <button key={finish.label} type="button" className={activeFinish === finish.label ? "active" : ""} onClick={() => setActiveFinish(finish.label)}>
                <span className="materials-finish-swatch" style={{ background: finish.tone }} />
                <span>{finish.label}</span>
              </button>
            ))}
          </div>
          <a href="/contact" className="materials-view-link">View material <ArrowRight size={15} /></a>
        </div>

        <div className="materials-grid">
          {materials.map((material) => (
            <a href="/contact" key={material.name} className="material-card">
              <div className="material-card-image-wrap">
                <Image src={material.image} alt={`${material.name} stone texture`} fill sizes="(max-width: 760px) 100vw, 25vw" className="material-card-image" />
                <span className="material-card-arrow"><ArrowRight size={15} /></span>
              </div>
              <div className="material-card-copy">
                <h2>{material.name}</h2>
                <p>{material.finish}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="materials-library-footer">
          <div>
            <p className="materials-eyebrow">THE HORUS LIBRARY</p>
            <p>Every slab is a one-off composition of color, vein and translucency.</p>
          </div>
          <a href="/contact" className="materials-consultation-link">Request a material consultation <ArrowRight size={15} /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
