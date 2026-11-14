"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  { image: "/images/thh.jpg", eyebrow: "Cleaning you can count on", title: "A cleaner space. A better experience.", description: "Professional residential and commercial cleaning delivered with care, consistency and attention to detail." },
  { image: "/images/hero2.jpg", eyebrow: "Property care", title: "Reliable maintenance, from small repairs to bigger projects.", description: "Keep your property looking its best with dependable maintenance and improvement services." },
  { image: "/images/hero.jpg", eyebrow: "Deep cleaning", title: "A deeper clean for a healthier environment.", description: "Detailed cleaning solutions for homes, offices and properties that need an extra level of care." },
  { image: "/images/hero1.jpg", eyebrow: "Home improvements", title: "Refresh your property with confidence.", description: "Painting, tiling, repairs and practical improvements completed professionally." },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(v => (v + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[650px] h-[calc(100vh-112px)] max-h-[820px] overflow-hidden bg-[#07152d]">
      {slides.map((slide, i) => (
        <div key={slide.image} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== current}>
          <div className="absolute inset-0 bg-cover bg-center scale-[1.03]" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,13,30,.88)_0%,rgba(3,13,30,.63)_48%,rgba(3,13,30,.2)_100%)]" />
        </div>
      ))}

      <div className="relative z-10 container-shell h-full flex items-center">
        <div className="max-w-3xl text-white animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#25D366]" /> {slides[current].eyebrow}
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.03] tracking-tight md:text-7xl">
            {slides[current].title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">{slides[current].description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 text-center font-bold text-[#004295] shadow-xl hover:bg-slate-100 transition">
              Request a Quote
            </Link>
            <a href="https://wa.me/27682221989" target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center font-bold text-white backdrop-blur-md hover:bg-white/20 transition">
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-200">
            <span>✓ Residential & commercial</span><span>✓ Flexible service areas</span><span>✓ Quality-focused</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button key={slide.title} onClick={() => setCurrent(i)} aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-10 bg-white" : "w-5 bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}
