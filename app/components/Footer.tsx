import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#07152d] text-white">
      <div className="container-shell py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image src="/images/logo.png" alt="The Helping Hands" width={190} height={76} className="h-16 w-auto object-contain brightness-0 invert" />
            <p className="mt-6 max-w-xl leading-7 text-slate-300">
              Professional cleaning, property maintenance and home improvement services for homes and businesses across South Africa.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://wa.me/27682221989" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white">WhatsApp Booking</a>
              <Link href="/company-profile" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">Company Profile</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <Link href="/services" className="hover:text-white">Our Services</Link>
              <Link href="/gallery" className="hover:text-white">Gallery</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <a href="/company-profile.pdf" target="_blank" className="hover:text-white">Download Profile</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <a href="tel:+27682221989" className="block hover:text-white">+27 68 222 1989</a>
              <a href="tel:+27790503168" className="block hover:text-white">+27 79 050 3168</a>
              <a href="mailto:info@thehelpinghands.co.za" className="block hover:text-white">info@thehelpinghands.co.za</a>
              <p>Louis Trichardt, Limpopo, South Africa</p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Helping Hands. All rights reserved.</p>
          <p>Designed & Developed by <span className="text-slate-200">Mdebe Tech Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}
