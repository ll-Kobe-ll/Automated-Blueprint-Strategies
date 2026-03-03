import "../globals.css";

export const metadata = {
  title: "Pricing | Automated Blueprint Strategies",
  description:
    "Transparent pricing for AI website chat assistants, AI intake receptionists, and AI conversion/retention engines. Clear deliverables, upfront investment, recurring growth.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f172a] scroll-smooth">
      {/* ================= Hero Section ================= */}
      <section className="px-6 md:px-10 py-20 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Pricing for AI Intake, Chat, and Retention Systems
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          High-ROI automation with clear deliverables and predictable pricing.
          These systems reduce admin workload, capture more leads, and increase
          repeat bookings without adding headcount.
        </p>
      </section>

      {/* ================= Core Offers ================= */}
      <section
        id="offers"
        className="px-6 md:px-10 pt-10 pb-20 bg-white text-center"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {/* Offer 1 — AI Website Chat Assistant */}
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 bg-white relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
              Offer 1
            </span>
            <h2 className="text-2xl font-bold mb-3">AI Website Chat Assistant</h2>
            <p className="text-gray-600 mb-6 text-sm">
              A smart website chat widget that answers FAQs, captures visitor
              details, and routes them to book an appointment or call your office.
              Every inquiry is logged into your CRM for follow-up.
            </p>
            <div className="mb-6">
              <p className="text-4xl font-extrabold text-blue-600 mb-1">$2,000 Setup</p>
              <p className="text-sm text-gray-500">$750 / month</p>
            </div>
            <ul className="text-gray-700 text-left mb-8 space-y-3 text-sm">
              <li>✅ Website chat widget trained on your FAQs</li>
              <li>✅ Captures name, contact, service interest, and timing</li>
              <li>✅ One-click booking or “call now” routing</li>
              <li>✅ CRM sync so every chat becomes a tracked lead</li>
            </ul>
            <a
              href="/contact"
              className="block w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition"
            >
              Book My Lead-Loss Audit
            </a>
          </div>

          {/* Offer 2 — AI Intake Receptionist (highlighted/main offer) */}
          <div className="relative p-8 border-2 border-blue-600 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Offer 2
            </span>
            <h2 className="text-2xl font-bold mb-3">AI Intake Receptionist</h2>
            <p className="text-gray-600 mb-6 text-sm">
              An automated phone receptionist that handles incoming calls during
              business hours, answers common questions, qualifies leads, books
              appointments, and logs everything into your CRM.
            </p>
            <div className="mb-6">
              <p className="text-4xl font-extrabold text-blue-600 mb-1">$3,500 Setup</p>
              <p className="text-sm text-gray-500">$1,500 / month</p>
            </div>
            <ul className="text-gray-700 text-left mb-8 space-y-3 text-sm">
              <li>✅ Automated call answering during business hours</li>
              <li>✅ Lead qualification based on your criteria</li>
              <li>✅ Appointments booked directly onto your calendar</li>
              <li>✅ CRM sync for new & returning clients</li>
            </ul>
            <a
              href="/contact"
              className="block w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition"
            >
              Book My Lead-Loss Audit
            </a>
          </div>

          {/* Offer 3 — AI Conversion & Retention Engine */}
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 bg-white relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
              Offer 3
            </span>
            <h2 className="text-2xl font-bold mb-3">
              AI Conversion & Retention Engine
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Automates follow-up, no-show prevention, and reactivation so more
              leads convert and more past clients return on schedule.
            </p>
            <div className="mb-6">
              <p className="text-4xl font-extrabold text-blue-600 mb-1">$6,500 Setup</p>
              <p className="text-sm text-gray-500">$2,500 / month</p>
            </div>
            <ul className="text-gray-700 text-left mb-8 space-y-3 text-sm">
              <li>✅ Quote/estimate follow-ups that close sales</li>
              <li>✅ Appointment reminders + no-show reduction</li>
              <li>✅ 30/60/90-day reactivation automations</li>
              <li>✅ Repeat-visit & upsell promo flows</li>
            </ul>
            <a
              href="/contact"
              className="block w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition"
            >
              Book My Lead-Loss Audit
            </a>
          </div>

        </div>
      </section>

      {/* ================= Payment & Guarantee Section ================= */}
      <section className="px-6 md:px-10 py-20 bg-white text-center border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-6">Flexible Payments & Our Guarantee</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          These systems are designed to produce measurable results quickly.
          Every engagement includes flexible payment options and a satisfaction
          guarantee so you feel confident from day one.
        </p>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-4xl mb-3 block">💳</span>
            <h3 className="font-bold mb-2">Flexible Payments</h3>
            <p className="text-sm">
              Pay in full or split setup into milestones. We match payments to
              implementation phases so your cash flow stays simple.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-4xl mb-3 block">🛡️</span>
            <h3 className="font-bold mb-2">Satisfaction Guarantee</h3>
            <p className="text-sm">
              If you’re unhappy after implementation and a fair run period,
              we’ll fix it. If we can’t, we refund the setup fee minus direct hard costs.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-4xl mb-3 block">🤝</span>
            <h3 className="font-bold mb-2">Results Over Retainers</h3>
            <p className="text-sm">
              The goal is leverage. Fewer manual tasks, fewer missed opportunities,
              and a smoother intake and follow-up process that runs in the background.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-gray-600 text-sm">
          <p>
            We’re not here to add complexity. We’re here to remove friction and
            unlock bookings with automation that fits your workflow.
          </p>
        </div>
      </section>

      {/* ================= Final CTA ================= */}
      <section className="px-6 md:px-10 pt-20 pb-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold mb-4">
          Want to See Which System Fits You Best?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Start with a short Lead-Loss Audit. We’ll review where leads are slipping,
          then recommend the best starting point for your intake and follow-up.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Start My Free Lead-Loss Audit
        </a>
        <p className="text-sm text-white/80 mt-4">
          No pressure, just a clear plan and transparent pricing.
        </p>
      </section>
    </main>
  );
}
