"use client";
import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What do you actually build for clients?",
      answer:
        "We build three automation systems that handle intake, follow-up, and retention. That includes an AI phone receptionist, a website chat assistant, and a conversion/retention engine. Each system plugs into your calendar and CRM so leads are captured, booked, and tracked automatically.",
    },
    {
      question: "What are your three core offers?",
      answer:
        "Offer 1 is the AI Website Chat Assistant, Offer 2 is the AI Intake Receptionist, and Offer 3 is the AI Conversion & Retention Engine. They’re designed to work together, but you can start with one and add others later.",
    },
    {
      question: "How much does it cost?",
      answer:
        "AI Website Chat Assistant: $2,000 setup and $750 per month. AI Intake Receptionist: $3,500 setup and $1,500 per month. AI Conversion & Retention Engine: $6,500 setup and $2,500 per month. Pricing is flat and transparent so there’s no back and forth.",
    },
    {
      question: "Do these systems replace my staff?",
      answer:
        "No. The goal is to remove repetitive admin tasks, not replace people. Your team keeps control of the relationship and clinical decisions while the AI handles first-response intake, routine questions, booking, and follow-up. Most clients use the freed-up time for better client care, retention, and higher-value work.",
    },
    {
      question: "What problems does this solve?",
      answer:
        "Most appointment-based businesses lose revenue from missed calls, slow responses, inconsistent follow-up, and no structured reactivation of old leads. Our systems ensure every inquiry is answered quickly, tracked, and followed through until it converts or opts out.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Usually 5–10 business days depending on your tools and how quickly we get access. AI Intake Receptionist typically goes live first, then the Website Chat Assistant, then the Conversion & Retention Engine if you choose that tier.",
    },
    {
      question: "Will this work with our existing calendar and CRM?",
      answer:
        "Yes. We integrate into what you already use. If your tools support API or Zapier-style connections, we can plug in. If something is outdated, we’ll recommend the simplest workaround.",
    },
    {
      question: "Is it compliant and safe for clinics?",
      answer:
        "We design the AI to stay inside your approved FAQ and intake boundaries. It does not diagnose or give medical advice. It collects info, answers standard questions, and books consults. You approve the knowledge base and scripts before launch.",
    },
    {
      question: "What kind of results should we expect?",
      answer:
        "Results vary by volume, but most clients see more booked appointments, fewer missed calls, better follow-up consistency, and more repeat visits. The systems pay for themselves if they recover even one high-value lead per month.",
    },
    {
      question: "Can we start small and upgrade later?",
      answer:
        "Yes. Many clients start with Offer 2 (AI Intake Receptionist) because it has the fastest impact, then add the Website Chat Assistant and Retention Engine once intake is stabilized.",
    },
    {
      question: "What do you need from us to get started?",
      answer:
        "You’ll fill out a short Lead-Loss Audit, then we’ll ask for access to your calendar, CRM, phone routing, and FAQ/service details. We keep onboarding simple and structured so you’re not stuck in meetings.",
    },
    {
      question: "Is there a contract or can we cancel?",
      answer:
        "Month-to-month after setup. If you ever want to stop, you can cancel with simple notice. The systems are built to be valuable long-term, so we keep the relationship flexible.",
    },
    {
      question: "Do you offer a guarantee?",
      answer:
        "Yes. If we implement the system properly and you still feel it’s not delivering value after a fair run period, we’ll fix it. If we can’t fix it, we refund the setup fee minus any hard costs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-[#0f172a] scroll-smooth">
      {/* ================= Hero Section ================= */}
      <section className="px-6 md:px-10 py-20 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Quick answers about our AI intake, chat, and retention systems.
        </p>
      </section>

      {/* ================= FAQ Section ================= */}
      <section className="px-6 md:px-10 py-20 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <button
                className="w-full text-left px-6 py-4 bg-white flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-gray-800">
                  {faq.question}
                </span>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="px-6 md:px-10 py-20 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Reach out and we’ll help you understand which automation system is the best
          fit for your business. No pressure, no long calls.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Contact Us
        </a>
        <p className="text-sm text-white/80 mt-4">
          We typically reply within the same day.
        </p>
      </section>
    </main>
  );
}
