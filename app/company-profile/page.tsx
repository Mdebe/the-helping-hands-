"use client";

export default function CompanyProfile() {
  return (
    <div className="bg-gray-100 py-10 px-4">

      {/* PAGE */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6 relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

        {/* HEADER */}
        <div className="text-center relative z-10">
          <img
            src="/images/logo.png"
            alt="Helping Hands"
            className="w-28 mx-auto mb-3"
          />
          <h1 className="text-2xl font-bold text-[#004295]">
            The Helping Hands
          </h1>
          <p className="text-gray-500 text-sm">
            Integrated Service Solutions
          </p>
          <span className="inline-block mt-2 bg-[#004295] text-white text-xs px-3 py-1 rounded-full">
            BBBEE LEVEL 1
          </span>
        </div>

        {/* SECTION */}
        <Card title="Business Introduction">
          The Helping Hands is a proudly South African, 100% Black youth-owned
          company established in 2022. We provide professional cleaning,
          renovation, maintenance, and personal assistance services across
          residential, commercial, and industrial sectors.
        </Card>

        <Card title="Business Approach">
          Our experienced team ensures efficient and cost-effective service
          delivery from quotation to completion. We operate 24/7 with a focus
          on quality, safety, and customer satisfaction.
        </Card>

        <Card title="Operational Capability">
          Skilled teams, modern equipment, and strong supervision systems ensure
          consistent, high-quality service delivery across all projects.
        </Card>

        {/* COMPANY PROFILE */}
        <h2 className="text-xl font-bold text-center text-[#004295]">
          Company Profile
        </h2>

        <Card title="Mission">
          To provide reliable and affordable services while maintaining
          continuous improvement and excellence.
        </Card>

        <Card title="Vision">
          To become a leading service provider in South Africa, empowering youth
          and building strong client relationships.
        </Card>

        <Card title="Core Values">
          <ul className="list-disc pl-5">
            <li>Integrity and professionalism</li>
            <li>Quality service delivery</li>
            <li>Teamwork and leadership</li>
            <li>Customer satisfaction</li>
            <li>Continuous growth</li>
          </ul>
        </Card>

        {/* SERVICES */}
        <h2 className="text-xl font-bold text-center text-[#004295]">
          Services
        </h2>

        <Card title="Cleaning Services">
          <ul className="list-disc pl-5">
            <li>Residential & commercial cleaning</li>
            <li>Deep cleaning & sanitation</li>
            <li>Roof, window & paving cleaning</li>
            <li>Waste removal</li>
          </ul>
        </Card>

        <Card title="Renovation & Maintenance">
          <ul className="list-disc pl-5">
            <li>Painting & waterproofing</li>
            <li>Tiling & flooring</li>
            <li>Roof & ceiling repairs</li>
            <li>Handyman services</li>
          </ul>
        </Card>

        <Card title="Personal Services">
          <ul className="list-disc pl-5">
            <li>Laundry & ironing</li>
            <li>Maid assistance</li>
            <li>Transport services</li>
          </ul>
        </Card>

        <Card title="BBBEE Impact">
          A 100% Black youth-owned company committed to empowerment, job
          creation, and community development.
        </Card>

        {/* CTA */}
        <div className="text-center pt-6">
          <a
            href="https://wa.me/27682221989"
            target="_blank"
            className="bg-[#004295] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#00306e] transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}

/* REUSABLE CARD */
function Card({ title, children }: any) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-[#004295] mb-2">
        {title}
      </h3>
      <div className="text-gray-700 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}