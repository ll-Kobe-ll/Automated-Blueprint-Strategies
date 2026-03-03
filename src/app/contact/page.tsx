import Link from "next/link";

export const metadata = {
  title: "Contact | Automated Blueprint Strategies",
  description:
    "Book a call or send a quick message. We’ll help you choose the right AI intake, website chat, or retention system for your business.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f172a]">
      {/* Hero Section */}
      <section className="px-6 md:px-10 py-20 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-6">Book a Call or Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us a bit about your business and what you want to improve. We&apos;ll reply
          with clear next steps and, if it makes sense, get your system live fast.
        </p>
      </section>

      {/* Contact Form + Other Options */}
      <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Quick Intake Form
          </h2>
          <form
            action="https://formsubmit.co/info@automatedblueprintstrategies.com"
            method="POST"
            className="flex flex-col space-y-4"
          >
            {/* Contact Info */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="business_name"
              placeholder="Business Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="website_url"
              placeholder="Website URL (optional)"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What best describes your business?
              </label>
              <select
                name="industry"
                defaultValue=""
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="cosmetic_clinic">Cosmetic / Aesthetic Clinic</option>
                <option value="med_spa">Med Spa / Beauty / Wellness</option>
                <option value="dental">Dental Practice</option>
                <option value="law">Law Firm</option>
                <option value="home_services">Home Services (HVAC, plumbing, roofing, etc.)</option>
                <option value="agency">Agency / Professional Services</option>
                <option value="other">Other Appointment-Based Business</option>
              </select>
            </div>

            {/* Primary Interest */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you most interested in right now?
              </label>
              <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="primary_interest" value="website_chat" required />
                  <span>AI Website Chat Assistant</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="primary_interest" value="intake_receptionist" />
                  <span>AI Intake Receptionist</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="primary_interest" value="conversion_retention" />
                  <span>AI Conversion & Retention Engine</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="primary_interest" value="not_sure" />
                  <span>Not sure yet, I want guidance</span>
                </label>
              </div>
            </div>

            {/* Biggest Pain */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What feels like your biggest headache right now?
              </label>
              <select
                name="biggest_pain"
                defaultValue=""
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="missed_calls">Missed calls / slow responses</option>
                <option value="low_conversion">Leads not booking appointments</option>
                <option value="manual_followup">Too much manual follow-up</option>
                <option value="no_shows">No-shows / unreliable attendance</option>
                <option value="reactivation">Past clients not coming back</option>
                <option value="other">Something else</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What&apos;s your rough budget to solve this?
              </label>
              <select
                name="budget_range"
                defaultValue=""
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="under_2k">Under $2,000</option>
                <option value="2k_5k">$2,000 – $5,000</option>
                <option value="5k_10k">$5,000 – $10,000</option>
                <option value="10k_plus">$10,000+</option>
                <option value="not_sure">Not sure yet</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How soon are you looking to move forward?
              </label>
              <select
                name="timeline"
                defaultValue=""
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="asap">ASAP (this month)</option>
                <option value="1_3_months">Within 1–3 months</option>
                <option value="3_6_months">Within 3–6 months</option>
                <option value="just_exploring">Just exploring options</option>
              </select>
            </div>

            {/* Optional Extra Context */}
            <textarea
              name="extra_context"
              rows={3}
              placeholder="Anything else we should know? (optional)"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Hidden anti-spam + redirect for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.automatedblueprintstrategies.com/thank-you"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Submit & Request Contact
            </button>
          </form>
        </div>

        {/* Other Contact Methods */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Prefer to Talk Live?</h2>
            <p className="text-gray-600">
              Email us directly or grab a time that works for you. We keep calls short,
              clear, and useful.
            </p>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:info@automatedblueprintstrategies.com"
                className="text-blue-600 hover:underline"
              >
                info@automatedblueprintstrategies.com
              </a>
            </p>
            <p>
              📞 Phone:{" "}
              <a href="tel:+xxxxxxxxxx" className="text-blue-600 hover:underline">
                (XXX) XXX-XXXX
              </a>
            </p>
            <p>
              📅 Book a Call:{" "}
              <a
                href="https://calendly.com/automatedblueprintstrategies-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Schedule on Calendly
              </a>
            </p>
          </div>

          <p className="text-gray-500 text-sm pt-4">
            We typically respond within 1 business day.  
            You&apos;ll get a clear next step — not a generic pitch.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Want to See How It Works?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Watch the demo or review the offers, then reach out when you’re ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#video"
            className="inline-block border border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-transform hover:scale-105"
          >
            Watch the Demo
          </Link>
          <Link
            href="/#offers"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105"
          >
            View All Offers
          </Link>
        </div>
      </section>
    </main>
  );
}
