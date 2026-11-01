"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

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

export default function CollectionsPage() {
  return (
    <main className="collections-page">
      <SiteHeader active="collections" />

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
      <SiteFooter />
    </main>
  );
}
