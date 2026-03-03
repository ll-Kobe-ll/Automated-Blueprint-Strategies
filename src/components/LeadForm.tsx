'use client';
import { useState } from 'react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md text-lg font-semibold">
        🎉 Thanks for applying!
        <p className="text-sm mt-2">We’ll review your info and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-1 gap-6 text-left bg-gray-50 p-8 rounded-xl shadow-md"
      >
        <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        {/* Business Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
          <select name="business" className="w-full border rounded px-4 py-3" required>
            <option value="">Select your business type</option>
            <option value="realtor">Realtor / Real Estate</option>
            <option value="salon-spa">Salon / Spa / Aesthetics</option>
            <option value="fitness-coaching">Fitness / Coaching / Personal Training</option>
            <option value="medical">Medical / Dental / Healthcare</option>
            <option value="law">Legal / Law Firm</option>
            <option value="contractor">Home Services / Contractor</option>
            <option value="consultant">Consultant / Agency</option>
            <option value="ecommerce">E‑Commerce / Online Business</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Biggest Bottleneck */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What’s your biggest bottleneck right now?</label>
          <input
            type="text"
            name="bottleneck"
            placeholder="e.g. Missed calls, no-shows, admin overload"
            className="w-full border rounded px-4 py-3"
            required
          />
        </div>

        {/* Revenue */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Monthly Revenue</label>
          <select name="revenue" className="w-full border rounded px-4 py-3" required>
            <option value="under-10k">Less than $10k</option>
            <option value="10-30k">$10k – $30k</option>
            <option value="30-75k">$30k – $75k</option>
            <option value="75k+">$75k+</option>
          </select>
        </div>

        {/* Main Challenge */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What’s the main challenge you’d like solved first?</label>
          <select name="main_challenge" className="w-full border rounded px-4 py-3" required>
            <option value="">Select one</option>
            <option value="missed-leads">Too many missed calls/leads</option>
            <option value="no-shows">No-shows or unconfirmed appointments</option>
            <option value="reviews">Not enough reviews / weak reputation</option>
            <option value="manual-work">Too much admin / manual work</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Handling */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">How are you handling this now?</label>
          <select name="handling" className="w-full border rounded px-4 py-3" required>
            <option value="nothing">Nothing yet</option>
            <option value="manual">Doing it manually</option>
            <option value="assistant">Have a part-time assistant</option>
            <option value="tool">Using another tool</option>
          </select>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="email" name="email" placeholder="Email (required)" required className="w-full border rounded px-4 py-3" />
          <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full border rounded px-4 py-3" />
        </div>

        {/* Follow-Up */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Follow-Up</label>
          <div className="flex items-center space-x-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="followup" value="Email" className="h-4 w-4 text-blue-600" required />
              <span>Email</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="followup" value="Text" className="h-4 w-4 text-blue-600" />
              <span>Text</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="followup" value="Phone Call" className="h-4 w-4 text-blue-600" />
              <span>Phone Call</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit & Get My Plan
        </button>
      </form>

    </>
  );
}
