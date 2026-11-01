"use client";

import Image from "next/image";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <SiteHeader active="contact" />

      <section className="contact-hero" id="top">
        <Image
          src="/images/contact-hero.png"
          alt="A glowing alabaster interior at the Horus atelier"
          fill
          priority
          sizes="100vw"
          className="contact-hero-image"
        />
        <div className="contact-hero-overlay" />

        <div className="contact-layout">
          <div className="contact-copy">
            <p className="contact-eyebrow">CONTACT</p>
            <span className="contact-rule" />
            <h1>Bring the stone<br />into the room.</h1>
          </div>

          <div className="contact-panel">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success-icon"><Check size={22} /></span>
                <h2>Thank you.</h2>
                <p>Your brief is with the atelier. We will be in touch soon.</p>
                <button type="button" onClick={() => setSubmitted(false)}>Send another brief</button>
              </div>
            ) : (
              <>
                <div className="contact-form-heading">
                  <p className="contact-panel-kicker">HORUS ATELIER</p>
                  <h2>Request a quote</h2>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <label className="contact-field">
                    <span>Name</span>
                    <input required name="name" autoComplete="name" placeholder="Name" />
                  </label>
                  <label className="contact-field">
                    <span>Email</span>
                    <input required type="email" name="email" autoComplete="email" placeholder="Email" />
                  </label>
                  <label className="contact-field">
                    <span>Project type</span>
                    <select name="projectType" defaultValue="Private residence">
                      <option>Private residence</option>
                      <option>Hospitality / retail</option>
                      <option>Art object</option>
                      <option>Material consultation</option>
                    </select>
                  </label>
                  <label className="contact-field">
                    <span>Tell us about the brief</span>
                    <textarea required name="brief" rows={4} placeholder="A few words about your space, timeline, or material idea..." />
                  </label>
                  <button className="contact-submit" type="submit">
                    <span>Send project brief</span>
                    <ArrowRight size={17} />
                  </button>
                </form>
              </>
            )}

            <div className="contact-info" aria-label="Atelier contact details">
              <div className="contact-info-item">
                <MapPin size={19} strokeWidth={1.15} />
                <span>Cairo<br />Egypt</span>
              </div>
              <a className="contact-info-item" href="mailto:studio@horusatelier.com">
                <Mail size={19} strokeWidth={1.15} />
                <span>studio@<br />horusatelier.com</span>
              </a>
              <a className="contact-info-item" href="tel:+201000000000">
                <Phone size={19} strokeWidth={1.15} />
                <span>+20 10<br />0000 0000</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
