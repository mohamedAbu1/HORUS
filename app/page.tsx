"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Check,
  Mail,
} from "lucide-react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const materialNotes = [
  ["01", "Alabaster", "Warm translucency, naturally veined"],
  ["02", "Onyx", "A deeper palette with quiet drama"],
  ["03", "Travertine", "Ancient texture, contemporary form"],
];

const processSteps = [
  ["01", "Source", "We select each block for its light, grain, and character."],
  ["02", "Reveal", "The first cut follows the stone rather than forcing it."],
  ["03", "Refine", "Hand finishing brings a soft, almost liquid surface."],
  ["04", "Install", "Every piece is placed to make architecture feel luminous."],
];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#caa56d]">
      <span className="h-px w-8 bg-[#caa56d]" />
      {children}
    </p>
  );
}

function CircleArrow({ direction = "up" }: { direction?: "up" | "down" }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-[#ead6ba] transition group-hover:border-[#caa56d] group-hover:bg-[#caa56d] group-hover:text-[#1d1710]">
      {direction === "down" ? <ArrowDownRight size={17} /> : <ArrowUpRight size={17} />}
    </span>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0a08] text-[#f7f0e7] selection:bg-[#caa56d] selection:text-[#1c1610]">
      <SiteHeader active="home" />

      <section id="top" className="relative isolate min-h-[760px] overflow-hidden pt-[78px] lg:min-h-screen">
        <Image src="/images/hero-atelier.png" alt="A luminous alabaster installation in the Horus atelier" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 -z-0 bg-[linear-gradient(90deg,rgba(7,6,5,.94)_0%,rgba(7,6,5,.7)_33%,rgba(7,6,5,.15)_68%,rgba(7,6,5,.5)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0a08] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] flex-col justify-center px-5 pb-44 pt-24 sm:px-8 lg:min-h-[calc(100vh-78px)] lg:px-12">
          <div className="max-w-[690px]">
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.42em] text-[#d5ad72]">Light, carved into stone.</p>
            <h1 className="max-w-3xl font-serif text-[clamp(4.5rem,11vw,10.75rem)] leading-[0.78] tracking-[-0.055em] text-[#f6e5ca]">HORUS</h1>
            <p className="mt-8 max-w-md font-serif text-2xl leading-tight text-white/82 sm:text-3xl">Material, illuminated.</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/58">We shape the quiet drama of natural stone into spaces, objects, and light that stay with you.</p>
            <a href="/collections" className="group mt-9 inline-flex items-center gap-6 rounded-full bg-[#caa56d] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1e170f] transition hover:bg-[#e6c38f]">
              Explore collections
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="absolute bottom-8 left-5 right-5 grid gap-2 sm:bottom-10 sm:left-8 sm:right-8 sm:grid-cols-4 lg:left-12 lg:right-12">
            {[
              ["01", "Materials", "#materials", "/images/materials-alabaster.png"],
              ["02", "Collections", "/collections", "/images/collection-forms.png"],
              ["03", "Process", "/process", "/images/process-cutting.png"],
              ["04", "Contact", "/contact", "/images/contact-reception.png"],
            ].map(([number, label, href, image]) => (
              <a href={href} key={label} className="group relative h-[112px] overflow-hidden rounded-[3px] border border-white/20 bg-[#211a14]/70 p-4 sm:h-[132px]">
                <Image src={image} alt="" fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-[#0b0a08]/20 to-transparent" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">{number}</span>
                  <div className="flex items-end justify-between gap-2">
                    <span className="font-serif text-xl text-[#f3e4cc] sm:text-2xl">{label}</span>
                    <CircleArrow />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-white/10 bg-[#0f0d0b] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-28">
          <div>
            <SectionKicker>Our point of view</SectionKicker>
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#f3e1c3] sm:text-7xl lg:text-[clamp(5rem,8vw,8.5rem)]">Stone has a pulse.</h2>
          </div>
          <div className="self-end pb-1">
            <p className="max-w-lg text-[15px] leading-8 text-white/60">Horus is an alabaster atelier for people who want more from material. We source singular stone, trace its natural movement, and turn it into architecture with a sense of stillness.</p>
            <div className="mt-10 flex items-end gap-8">
              <span className="font-serif text-5xl text-[#caa56d]">01</span>
              <span className="max-w-[160px] text-[10px] uppercase leading-5 tracking-[0.18em] text-white/40">Material-led design, made slowly.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="scroll-mt-24 bg-[#17120e] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <SectionKicker>The material library</SectionKicker>
              <h2 className="font-serif text-5xl leading-none tracking-[-0.04em] text-[#f3e1c3] sm:text-7xl">Find your light.</h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/50">Every slab is a one-off composition of color, vein, and translucency.</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-stretch">
            <div className="group relative min-h-[440px] overflow-hidden rounded-[3px] border border-white/10 sm:min-h-[600px]">
              <Image src="/images/materials-alabaster.png" alt="Raw alabaster blocks and slabs" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover transition duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08]/90 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#caa56d]">Featured stone</p>
                  <h3 className="font-serif text-4xl text-white sm:text-5xl">Aurelia Alabaster</h3>
                </div>
                <CircleArrow direction="down" />
              </div>
            </div>
            <div className="flex flex-col justify-between border-t border-white/15 lg:border-t-0">
              <div>
                {materialNotes.map(([number, title, description]) => (
                  <div key={number} className="group flex items-start gap-5 border-b border-white/15 py-7 first:pt-0">
                    <span className="mt-1 text-[10px] tracking-[0.2em] text-[#caa56d]">{number}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-[#f3e1c3]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/45">{description}</p>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto mt-2 text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#caa56d]" />
                  </div>
                ))}
              </div>
              <a href="/contact" className="mt-10 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e0bd89] transition hover:text-white">Request a material consultation <ArrowRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="scroll-mt-24 bg-[#0b0a08] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <SectionKicker>Selected forms</SectionKicker>
              <h2 className="font-serif text-5xl leading-none tracking-[-0.04em] text-[#f3e1c3] sm:text-7xl">Collected in silence.</h2>
            </div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">Objects / 2026</span>
          </div>
          <div className="grid gap-3 md:grid-cols-[1.35fr_.65fr]">
            <a href="/contact" className="group relative min-h-[520px] overflow-hidden rounded-[3px] border border-white/10 bg-[#201810]">
              <Image src="/images/collection-forms.png" alt="Sculptural alabaster collection" fill sizes="(max-width: 768px) 100vw, 67vw" className="object-cover transition duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/90 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div><p className="text-[10px] uppercase tracking-[0.22em] text-[#caa56d]">Collection 01</p><h3 className="mt-2 font-serif text-4xl text-white sm:text-5xl">The Quiet Forms</h3></div>
                <CircleArrow />
              </div>
            </a>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <div className="flex min-h-[250px] flex-col justify-between border border-white/10 bg-[#15110d] p-7">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#caa56d]">Signature</span>
                <div><p className="font-serif text-3xl leading-tight text-[#f3e1c3]">Designed to catch the last light.</p><p className="mt-4 text-sm leading-6 text-white/45">Sculptural objects for rooms that value atmosphere over noise.</p></div>
              </div>
              <a href="/contact" className="group relative min-h-[250px] overflow-hidden border border-white/10 bg-[#17120e] p-7">
                <Image src="/images/process-cutting.png" alt="Horus stone cutting process" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-65" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] to-transparent" />
                <div className="relative flex h-full flex-col justify-between"><span className="text-[10px] uppercase tracking-[0.22em] text-[#caa56d]">Made by hand</span><div className="flex items-end justify-between"><span className="font-serif text-3xl text-[#f3e1c3]">From block to heirloom</span><CircleArrow /></div></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 relative overflow-hidden bg-[#15100c]">
        <div className="absolute inset-0"><Image src="/images/process-cutting.png" alt="Diamond saw cutting alabaster" fill sizes="100vw" className="object-cover opacity-35" /><div className="absolute inset-0 bg-[#0a0806]/55" /></div>
        <div className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="max-w-xl"><SectionKicker>The process</SectionKicker><h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#f3e1c3] sm:text-7xl">Slow work.<br />Deep reward.</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/58">We do not impose a shape on stone. We listen for the form already held inside it.</p></div>
          <div className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([number, title, description]) => <div key={number} className="border-b border-white/20 py-6 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"><span className="text-[10px] tracking-[0.2em] text-[#caa56d]">{number}</span><h3 className="mt-12 font-serif text-2xl text-[#f3e1c3]">{title}</h3><p className="mt-3 max-w-[200px] text-sm leading-6 text-white/45">{description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-[#100d0a] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="absolute inset-0"><Image src="/images/contact-reception.png" alt="Horus reception desk" fill sizes="100vw" className="object-cover opacity-38" /><div className="absolute inset-0 bg-gradient-to-r from-[#0c0907] via-[#0c0907]/80 to-[#0c0907]/20" /></div>
        <div className="relative mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><SectionKicker>Begin a conversation</SectionKicker><h2 className="max-w-xl font-serif text-5xl leading-[0.9] tracking-[-0.04em] text-[#f3e1c3] sm:text-7xl">Bring more light into the room.</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/55">Tell us what you are imagining. We will get back to you with a material direction, a first conversation, and a little more light.</p><div className="mt-10 flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.18em] text-white/45"><a href="mailto:studio@horusatelier.com" className="inline-flex items-center gap-2 transition hover:text-[#e0bd89]"><Mail size={14} /> studio@horusatelier.com</a><a href="#top" className="inline-flex items-center gap-2 transition hover:text-[#e0bd89]"><AtSign size={14} /> @horusatelier</a></div></div>
          <form onSubmit={handleSubmit} className="rounded-[3px] border border-white/15 bg-[#17120e]/80 p-6 backdrop-blur-md sm:p-9">
            {submitted ? <div className="flex min-h-[350px] flex-col items-center justify-center text-center"><span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#caa56d] text-[#caa56d]"><Check size={22} /></span><h3 className="font-serif text-3xl text-[#f3e1c3]">Thank you.</h3><p className="mt-3 max-w-xs text-sm leading-6 text-white/50">Your note is with the atelier. We will be in touch soon.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#d5ad72]">Send another note</button></div> : <><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Your name<input required name="name" className="field-input" placeholder="Name" /></label><label className="field-label">Email address<input required type="email" name="email" className="field-input" placeholder="you@example.com" /></label></div><label className="field-label mt-5">Project type<select name="project" className="field-input"><option>Private residence</option><option>Hospitality / retail</option><option>Art object</option><option>Material consultation</option></select></label><label className="field-label mt-5">Tell us a little more<textarea required name="message" rows={4} className="field-input resize-none" placeholder="A few words about your space, timeline, or material idea..." /></label><button type="submit" className="group mt-7 inline-flex items-center gap-5 rounded-full bg-[#caa56d] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1e170f] transition hover:bg-[#e6c38f]">Start the conversation <ArrowRight size={15} className="transition group-hover:translate-x-1" /></button></>}
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
