export const metadata = {
  title: "Legal | Automated Blueprint Strategies",
  description:
    "Privacy Policy and Terms of Use for Automated Blueprint Strategies — transparency and trust for all clients and visitors.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f172a]">
      <section className="px-6 md:px-10 py-20 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-6">Legal Information</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Below you’ll find our Privacy Policy and Terms of Service.  
          This information is provided for transparency and compliance purposes.
        </p>
      </section>

      <section className="px-6 md:px-10 py-20 max-w-4xl mx-auto text-gray-700 space-y-12">
        {/* Privacy Policy */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#0f172a]">Privacy Policy</h2>
          <p className="mb-4">
            This website, operated by <strong>Automated Blueprint Strategies</strong> (“we,” “us,” or “our”),
            respects your privacy. We collect only the information you choose to provide — such as
            your name, email, and phone number when you fill out a form or contact us.
          </p>
          <p className="mb-4">
            We use this information solely to respond to inquiries, deliver our services, and
            improve your experience. We never sell or rent personal data to third parties.
          </p>
          <p className="mb-4">
            Our website may use tools like Google Analytics to understand general traffic trends.
            These tools use cookies to collect anonymous usage data. You can disable cookies in
            your browser settings if you prefer.
          </p>
          <p className="mb-4">
            If you have any questions about your data or wish to request deletion, please contact us at{" "}
            <a href="mailto:info@automatedblueprintstrategies.com" className="text-blue-600 hover:underline">
              info@automatedblueprintstrategies.com
            </a>.
          </p>
        </div>

        {/* Terms of Service */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#0f172a]">Terms of Service</h2>
          <p className="mb-4">
            By using this website, you agree not to misuse its content or interfere with its functionality.
            All text, graphics, and code are owned by Automated Blueprint Strategies and may not be
            reproduced without permission.
          </p>
          <p className="mb-4">
            We make every effort to ensure accuracy, but our content is provided “as-is.” We do not guarantee
            specific outcomes or results from automation systems. Each business’s success depends on multiple
            factors outside of our control.
          </p>
          <p className="mb-4">
            If you engage us for services, a separate written or electronic agreement (proposal, invoice, or
            email confirmation) will define the specific scope, deliverables, and payment terms.
          </p>
          <p className="mb-4">
            Automated Blueprint Strategies is currently operating as a sole proprietorship based in California, USA.
            All transactions are governed by California law.
          </p>
        </div>

        {/* Disclaimer */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#0f172a]">Disclaimer</h2>
          <p className="mb-4">
            The information on this website is for general informational purposes only. While we strive to keep
            content accurate and up to date, Automated Blueprint Strategies makes no warranties or guarantees
            regarding the completeness or reliability of any information.
          </p>
          <p className="mb-4">
            AI automation systems should be used responsibly and tested before deployment. We are not liable for
            any indirect or consequential losses resulting from the use or performance of our services.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Questions or Concerns?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Transparency is important to us. If you have any questions about this page or your data, contact us anytime.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
