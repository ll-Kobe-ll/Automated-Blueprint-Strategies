import Link from "next/link";

export const metadata = {
  title: "About | Automated Blueprint Strategies",
  description:
    "Automated Blueprint Strategies builds high-conversion websites, 24/7 AI receptionist systems, and efficiency blueprints for service businesses that want to scale without more staff.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f172a]">
      {/* Hero / Intro */}
      <section className="px-6 md:px-10 py-20 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About Automated Blueprint Strategies
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We help service businesses run smoother and more profitably with three things:
          high-conversion websites, 24/7 AI receptionists, and simple systems that take
          busywork off your plate.
        </p>
      </section>

      {/* What We Do */}
      <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Built for Owners Who Are Tired of Chaos</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most service businesses don&apos;t need more apps. They need cleaner systems:
          a website that actually converts, a receptionist that never sleeps, and
          operations that don&apos;t depend on someone being “on” 24/7.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our job is to turn missed calls, leaky websites, and manual follow-up into a
          small set of dependable systems that support growth instead of fighting it.
        </p>
      </section>

      {/* Who We Help + Problems */}
      <section className="px-6 md:px-10 py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
              Who We Work With
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-center lg:text-left">
              We&apos;re built for service businesses where every call and appointment matters:
            </p>
            <ul className="text-gray-700 text-sm space-y-2 text-center lg:text-left">
              <li>• Law firms and legal practices</li>
              <li>• Dental, medical, and med spa clinics</li>
              <li>• Real estate teams and brokerages</li>
              <li>• Home services: HVAC, roofing, plumbing, electrical, etc.</li>
              <li>• Agencies and other local / professional services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">
              Problems We Focus On
            </h3>
            <ul className="text-gray-700 text-sm space-y-3">
              <li>✅ Websites that look fine but don&apos;t generate booked calls.</li>
              <li>✅ Missed calls, slow responses, and leads that quietly disappear.</li>
              <li>✅ Teams buried in manual admin, follow-up, and status checks.</li>
              <li>✅ No clear systems — just “how we&apos;ve always done it.”</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Work / 3 Offers */}
      <section className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">How We Work With You</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Everything we do fits into three core offers. You can start where it makes
          the most sense, or fill out the efficiency audit and we&apos;ll recommend the
          right one.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-2xl bg-gray-50">
            <h3 className="font-bold text-lg mb-2">AI-Optimized Website Build</h3>
            <p className="text-sm text-gray-600 mb-3">
              A modern, fast website built to convert — with clear messaging, booking
              flows, and lead capture baked in.
            </p>
            <p className="text-xs text-gray-500">
              <strong>$4,000</strong> +$250/mo hosting & service
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-gray-50">
            <h3 className="font-bold text-lg mb-2">24/7 AI Receptionist System</h3>
            <p className="text-sm text-gray-600 mb-3">
              A fully customized AI receptionist that answers, qualifies, and books
              appointments around the clock.
            </p>
            <p className="text-xs text-gray-500">
              <strong>$3,500</strong> +$800/mo hosting & service
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-gray-50">
            <h3 className="font-bold text-lg mb-2">3-Month Efficiency Blueprint</h3>
            <p className="text-sm text-gray-600 mb-3">
              An async engagement where we map your bottlenecks, design better systems,
              and support implementation.
            </p>
            <p className="text-xs text-gray-500">
              <strong>$12,000</strong> &middot; 3-month engagement
            </p>
          </div>
        </div>
      </section>

      {/* Values / Philosophy */}
      <section className="px-6 md:px-10 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Matters to Us</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-4xl mb-3 block">⚙️</span>
            <h3 className="font-bold text-xl mb-2">Systems, Not Hacks</h3>
            <p className="text-gray-600 text-sm">
              We&apos;re not chasing trends. We build durable systems that quietly
              support your business every day.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-4xl mb-3 block">⏱️</span>
            <h3 className="font-bold text-xl mb-2">Respect for Time</h3>
            <p className="text-gray-600 text-sm">
              Minimal meetings, clear deliverables, and async communication. Efficiency
              starts with how we work together.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="text-4xl mb-3 block">🤝</span>
            <h3 className="font-bold text-xl mb-2">Long-Term Partnership</h3>
            <p className="text-gray-600 text-sm">
              We care about being a real operating partner, not just someone who
              installs tools and disappears.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pt-20 pb-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Make Your Business Easier to Run?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Start with the short efficiency audit. We&apos;ll review where you are now and
          recommend the best starting point — website, AI receptionist, or full
          efficiency blueprint.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Start My Free Efficiency Audit
        </Link>
      </section>
    </main>
  );
}
