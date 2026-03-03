import "./globals.css";

export const metadata = {
  title: "Automated Blueprint Strategies | AI Receptionists & Automation Systems",
  description:
    "We install AI receptionists, web/DM chat, and follow-up automation that capture more leads, book more appointments, and increase repeat revenue on autopilot.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0f172a] scroll-smooth">
      {/* ================= Hero Section ================= */}
      <section
        id="hero"
        className="px-6 md:px-10 py-24 text-center bg-gray-50 flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Book More High-Value Appointments — Automatically
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          We automate your intake and follow-up so your team can focus on real
          patient care instead of chasing calls and messages. No extra hires, 
          no wasted time, just more booked appointments and smoother operations.
        </p>

        {/* subtle specialization line */}
        <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10">
          Built for high-ticket, appointment-based businesses. We specialize in cosmetic
          and aesthetic practices, but serve any business where missed leads cost real money.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Contact Us
          </a>
          <a
            href="#video"
            className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform hover:shadow-lg"
          >
            Watch the AI Receptionist Demo
          </a>
        </div>
      </section>

      {/* ================= Problem → Solution ================= */}
      <section className="px-6 md:px-10 py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Where High-Value Leads Get Lost
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-gray-700">
          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <span className="text-4xl">📞</span>
            <h3 className="font-bold mt-3 mb-2">Missed Calls = Lost Revenue</h3>
            <p className="text-sm">
              When your team is busy, leads go unanswered. Our AI receptionist responds
              instantly and books appointments 7 days a week.
            </p>
          </div>
          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <span className="text-4xl">⚡</span>
            <h3 className="font-bold mt-3 mb-2">Slow Follow-Up Kills Conversions</h3>
            <p className="text-sm">
              Most leads choose whoever follows up first. We automate SMS/email follow-ups
              until they book or opt out.
            </p>
          </div>
          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <span className="text-4xl">🔁</span>
            <h3 className="font-bold mt-3 mb-2">Past Clients Go Cold</h3>
            <p className="text-sm">
              Reactivation and repeat-visit reminders should run automatically. Our system
              brings old clients back in on schedule.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg">
            Automated Blueprint Strategies replaces missed leads, manual follow-up,
            and admin chaos with AI systems that drive bookings and repeat revenue
            on autopilot.
          </p>
        </div>
      </section>

      {/* ================= Demo Section (video kept) ================= */}
      <section
        id="video"
        className="px-4 md:px-10 py-20 bg-gray-100 text-center flex flex-col items-center"
      >
        <h2 className="text-3xl font-semibold mb-6">
          See the AI Receptionist in Action
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Watch how the receptionist answers calls, qualifies leads, and books appointments
          automatically — without you lifting a finger.
        </p>

        <div className="w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg mb-10">
          <iframe
            src="https://www.youtube.com/embed/0LT64_mgkro?si=3sshQnP9MEP1Bm8r"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <a
          href="/contact"
          className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
        >
          Start Your Free Lead-Loss Audit
        </a>
      </section>

      {/* ================= Offers ================= */}
      <section id="offers" className="px-6 md:px-10 py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Three Automation Systems That Scale Bookings
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Clear deliverables. Fast setup. Recurring growth.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {/* Offer 1 */}
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 bg-white relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
              Offer 1
            </span>
            <h2 className="text-2xl font-bold mb-3">AI Website Chat Assistant</h2>
            <p className="text-gray-600 mb-6 text-sm">
              A smart website chat widget that answers FAQs, captures visitor details,
              and routes them to book an appointment or call your office. Every inquiry
              is logged into your CRM for easy follow-up.
            </p>

            <div className="mb-6">
              <p className="text-2xl font-extrabold text-blue-600 mb-1">$2,000 setup</p>
              <p className="text-sm text-gray-500">$750/mo</p>
            </div>

            <ul className="text-gray-700 text-left mb-8 space-y-3 text-sm">
              <li>✅ Website chat widget trained on your FAQs</li>
              <li>✅ Captures name, contact, service interest, and timing</li>
              <li>✅ One-click booking to your calendar or “call now” routing</li>
              <li>✅ CRM sync so every chat becomes a tracked lead</li>
            </ul>

            <a
              href="/contact"
              className="block w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition"
            >
              Book My Lead-Loss Audit
            </a>
          </div>


          {/* Offer 2 */}
          
          <div className="relative p-8 border-2 border-blue-600 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Offer 2
            </span>
            <h2 className="text-2xl font-bold mb-3">AI Intake Receptionist</h2>
            <p className="text-gray-600 mb-6 text-sm">
              An automated phone receptionist that handles incoming calls during business hours,
              answers common questions, qualifies leads, books appointments, and logs everything
              into your CRM so your team can focus on clients.
            </p>

            <div className="mb-6">
              <p className="text-2xl font-extrabold text-blue-600 mb-1">$3,500 setup</p>
              <p className="text-sm text-gray-500">$1,500/mo</p>
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


          {/* Offer 3 */}
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 bg-white relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
              Offer 3
            </span>
            <h2 className="text-2xl font-bold mb-3">
              AI Conversion & Retention Engine
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Automates follow-up, no-show prevention, and reactivation so more leads
              turn into repeat clients.
            </p>
            <div className="mb-6">
              <p className="text-2xl font-extrabold text-blue-600 mb-1">$6,500 setup</p>
              <p className="text-sm text-gray-500">$2,500/mo</p>
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

      {/* ================= How It Works ================= */}
      <section
        id="how"
        className="px-6 md:px-10 py-20 bg-white text-center max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-extrabold mb-6">How We Work With You</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Clear steps, fast setup, minimal back and forth. We install the system,
          your team keeps control, and bookings improve without extra workload.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              num: "1",
              title: "Book a Quick Call",
              desc: "Tell us your current intake and follow-up process. We’ll confirm which system will create the fastest impact.",
            },
            {
              num: "2",
              title: "We Build and Integrate",
              desc: "We configure your AI receptionist, website chat, and/or retention workflows inside your calendar and CRM.",
            },
            {
              num: "3",
              title: "Launch and Optimize",
              desc: "We go live, monitor performance, and refine messaging so lead capture and follow-up stay consistent.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-blue-600 text-3xl font-bold">{step.num}</div>
                <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Final CTA ================= */}
      <section
        id="form"
        className="px-6 md:px-10 py-20 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Automate Intake and Book More Appointments?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Book a call or send a quick message. We’ll walk you through the systems,
          recommend the best starting point, and get you live fast if it’s a fit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Book a Call
        </a>
        <p className="text-sm text-white/80 mt-4">
          Short, clear, & direct.
        </p>
      </section>
    </main>
  );
}
