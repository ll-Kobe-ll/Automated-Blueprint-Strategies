import Link from "next/link";

export const metadata = {
  title: "Thank You | Automated Blueprint Strategies",
  description:
    "Your form has been submitted successfully. We’ll get back to you shortly!",
};

export default function ThankYouPage() {
  return (
    <main className="py-24 px-6 bg-white text-[#0f172a] text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="max-w-xl mx-auto mb-8 text-gray-600">
        Your message has been sent successfully. Our team will review your submission and get in touch soon.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </main>
  );
}
