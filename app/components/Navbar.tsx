"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const phone = "+27 68 222 1989";
const email = "info@thehelpinghands.co.za";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <div className="hidden md:block bg-[#002d67] text-white text-sm">
        <div className="container-shell h-9 flex items-center justify-between">
          <p className="opacity-90">Professional cleaning, maintenance & property care</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-blue-200">+27 68 222 1989</a>
            <a href={`mailto:${email}`} className="hover:text-blue-200">{email}</a>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80">
        <div className="container-shell h-[76px] flex items-center justify-between">
          <Link href="/" onClick={close} className="shrink-0" aria-label="The Helping Hands home">
            <Image src="/images/logo.png" alt="The Helping Hands" width={190} height={76}
              className="h-14 w-auto object-contain" priority />
          </Link>

          <div className="hidden md:flex items-center gap-7 text-[15px] font-semibold text-slate-700">
            {[
              ["/", "Home"], ["/about", "About"], ["/services", "Services"],
              ["/gallery", "Gallery"], ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="relative py-3 hover:text-[#004295] transition-colors">
                {label}
              </Link>
            ))}
            <a href="https://wa.me/27682221989" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-2.5 text-white shadow-sm hover:brightness-95 transition">
              WhatsApp
            </a>
            <Link href="/contact"
              className="rounded-full bg-[#004295] px-5 py-2.5 text-white shadow-sm hover:bg-[#002d67] transition">
              Get a Quote
            </Link>
          </div>

          <button type="button" onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-xl border border-slate-200 p-2.5 text-slate-800"
            aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-5 pb-6 pt-4">
            <div className="flex flex-col gap-1">
              {[
                ["/", "Home"], ["/about", "About"], ["/services", "Services"],
                ["/gallery", "Gallery"], ["/contact", "Contact"],
              ].map(([href, label]) => (
                <Link key={href} href={href} onClick={close}
                  className="rounded-xl px-4 py-3.5 font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#004295]">
                  {label}
                </Link>
              ))}
              <a href="https://wa.me/27682221989" target="_blank" rel="noopener noreferrer"
                onClick={close} className="mt-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-center font-bold text-white">
                Chat on WhatsApp
              </a>
              <Link href="/contact" onClick={close}
                className="rounded-xl bg-[#004295] px-4 py-3.5 text-center font-bold text-white">
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
