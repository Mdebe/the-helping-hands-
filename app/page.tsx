import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import ServicesTabs from "./components/serviceTap";
import WhyChooseUs from "./components/whyus";
import ServiceAreas from "./components/ServiceAreas";
import FAQ from "./components/faq";

const stats = [
  ["Professional", "Service-first approach"],
  ["Reliable", "Consistent delivery"],
  ["Flexible", "Residential & business"],
  ["Local", "South African service"],
];

export default function Home() {
  return (
    <div className="bg-[#f7f9fc] text-slate-900">
      <HeroSlider />

      <section className="relative z-20 -mt-8">
        <div className="container-shell grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(15,23,42,.12)] md:grid-cols-4">
          {stats.map(([title, desc], i) => (
            <div key={title} className={`p-5 md:p-7 ${i ? "border-l border-slate-100" : ""}`}>
              <p className="font-extrabold text-[#004295]">{title}</p>
              <p className="mt-1 text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="section-pad">
          <div className="container-shell grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[.18em] text-[#004295]">The Helping Hands</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                Professional care for the places that matter.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We provide residential cleaning, commercial cleaning, deep cleaning, property maintenance and home improvement services with a practical, professional approach.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Serving clients across Limpopo, Mpumalanga and KwaZulu-Natal, with service areas including Louis Trichardt, Eshowe and Empangeni.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="rounded-full bg-[#004295] px-6 py-3 font-bold text-white hover:bg-[#002d67]">Discover Our Story</Link>
                <Link href="/services" className="rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-800 hover:border-[#004295] hover:text-[#004295]">Explore Services</Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/60 blur-2xl" />
              <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image src="/images/laundry.png" alt="Professional cleaning service" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/65 p-5 text-white backdrop-blur-md">
                  <p className="font-bold">Clean. Maintain. Improve.</p>
                  <p className="mt-1 text-sm text-slate-200">One dependable partner for everyday property care.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-shell">
            <div className="mb-10 max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[.18em] text-[#004295]">What we do</span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Services built around your needs.</h2>
              <p className="mt-4 text-slate-600">From routine cleaning to property improvements, choose the service that fits your space.</p>
            </div>
            <ServicesTabs />
          </div>
        </section>

        <WhyChooseUs />
        <ServiceAreas />
        <FAQ />

        <section className="section-pad">
          <div className="container-shell overflow-hidden rounded-[2rem] bg-[#004295] p-8 text-white md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-200">Ready when you are</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Tell us what you need cleaned, maintained or improved.</h2>
                <p className="mt-4 max-w-2xl text-blue-100">Get in touch for a quote and let&apos;s plan the right service for your property.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 text-center font-bold text-[#004295]">Request a Quote</Link>
                <a href="https://wa.me/27682221989" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-7 py-3.5 text-center font-bold text-white hover:bg-white/10">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
