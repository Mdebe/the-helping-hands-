"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 py-16 px-6 overflow-hidden">

      {/* 🌊 BACKGROUND CIRCLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute top-10 -right-40 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-[250px] h-[250px] bg-blue-800/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* 🔥 LOCAL SEO BOOST */}
        <div className="sr-only">
          Cleaning services South Africa, Limpopo cleaning company,
          Louis Trichardt cleaning services, Eshowe cleaning services,
          Empangeni cleaning services, residential cleaning, commercial cleaning,
          deep cleaning, property maintenance, office cleaning services near me.
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* BRAND */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition">
            <div className="relative w-[150px] h-[60px] mb-4">
              <Image
                src="/images/logo.png"
                alt="Helping Hands Cleaning Services South Africa"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              The Helping Hands provides professional cleaning, maintenance,
              and home improvement services across South Africa.
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/27682221989"
              target="_blank"
              className="inline-flex mt-4 bg-[#004295] text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-[#00306e] transition"
            >
              WhatsApp Booking
            </a>

            {/* COMPANY PROFILE LINKS */}
            <div className="flex gap-3 mt-4 text-sm">
              <a
  href="/company-profile"
  className="text-[#004295] hover:underline font-medium"
>
  Company Profile
</a>

              <a
                href="/company-profile.pdf"
                target="_blank"
                className="text-[#004295] hover:underline font-medium"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>🧹 Residential & Commercial Cleaning</li>
              <li>🧼 Deep Cleaning & Sanitation</li>
              <li>🏢 Office Cleaning Services</li>
              <li>🚚 Move-In / Move-Out Cleaning</li>
              <li>🛠️ Repairs & Maintenance</li>
              <li>🎨 Renovations & Improvements</li>
            </ul>
          </div>

          {/* CONTACT + MAP */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Contact & Location
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📞 +27 68 222 1989</p>
              <p>📞 +27 79 050 3168</p>
              <p>📧 info@thehelpinghands.co.za</p>
              <p>📍 Louis Trichardt, Limpopo, South Africa</p>
            </div>

            {/* GOOGLE MAP */}
            <div className="mt-4 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Louis+Trichardt+Limpopo&output=embed"
                width="100%"
                height="180"
                loading="lazy"
                className="border-0"
              />
            </div>

            {/* GOOGLE BUSINESS PROFILE LINK */}
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_LINK"
              target="_blank"
              className="inline-block mt-4 text-sm font-semibold text-[#004295] hover:underline"
            >
              View on Google Business
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} The Helping Hands. All rights reserved.
          </p>

          {/* DEV CREDIT */}
          <p className="text-xs text-gray-400">
            Designed & Developed by{" "}
            <span className="font-medium text-gray-600">
              Mdebe Tech Solutions
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}