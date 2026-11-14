import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Helping Hands | Professional Cleaning & Property Care",
    template: "%s | The Helping Hands",
  },
  description:
    "Professional residential and commercial cleaning, deep cleaning, property maintenance and home improvement services across South Africa.",
  keywords: [
    "cleaning services South Africa",
    "residential cleaning",
    "commercial cleaning",
    "deep cleaning",
    "property maintenance",
    "home improvements",
    "cleaning services Limpopo",
    "cleaning services KwaZulu-Natal",
    "cleaning services Louis Trichardt",
    "cleaning services Eshowe",
    "cleaning services Empangeni",
  ],
  metadataBase: new URL("https://thehelpinghands.co.za"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Helping Hands | Professional Cleaning & Property Care",
    description:
      "Reliable cleaning, maintenance and property improvement services for homes and businesses.",
    url: "https://thehelpinghands.co.za",
    siteName: "The Helping Hands",
    type: "website",
    locale: "en_ZA",
    images: [{ url: "/images/thh.jpg", width: 1200, height: 630, alt: "The Helping Hands services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Helping Hands",
    description: "Professional cleaning, maintenance and property care services.",
    images: ["/images/thh.jpg"],
  },
  icons: { icon: "/images/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Helping Hands",
    image: "https://thehelpinghands.co.za/images/thh.jpg",
    url: "https://thehelpinghands.co.za",
    telephone: "+27682221989",
    description:
      "Professional residential and commercial cleaning, deep cleaning, property maintenance and home improvement services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "102 President Street",
      addressLocality: "Louis Trichardt",
      addressRegion: "Limpopo",
      postalCode: "0920",
      addressCountry: "ZA",
    },
    areaServed: [
      "Louis Trichardt",
      "Eshowe",
      "Empangeni",
      "Limpopo",
      "Mpumalanga",
      "KwaZulu-Natal",
      "South Africa",
    ],
    serviceType: [
      "Residential Cleaning",
      "Commercial Cleaning",
      "Deep Cleaning",
      "Property Maintenance",
      "Home Improvement",
    ],
  };

  return (
    <html lang="en-ZA">
      <body className="min-h-screen bg-[#f7f9fc] text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
