import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid gap-10 md:grid-cols-3 text-center md:text-left">
        
        {/* Brand Column */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-600">
            Automated Blueprint Strategies
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            AI-powered receptionists that answer, qualify, and schedule — so you never
            miss a lead again.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link></li>
            <li><Link href="/faqs" className="hover:text-blue-600 transition">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a
                href="mailto:info@automatedblueprintstrategies.com"
                className="hover:text-blue-600 transition"
              >
                info@automatedblueprintstrategies.com
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/YOUR-CALENDLY-LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t text-center text-sm text-gray-500 py-6">
        <p>
          © {new Date().getFullYear()} Automated Blueprint Strategies. All rights reserved.
        </p>
        <p className="mt-1">
          Made with 🤖 by{" "}
          <span className="text-blue-600 font-medium">Automated Blueprint Strategies</span>
        </p>
      </div>
    </footer>
  );
}
