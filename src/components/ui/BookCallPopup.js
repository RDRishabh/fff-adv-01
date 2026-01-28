"use client";
import { useState } from "react";

const steps = [
  {
    label: "Quick Intro",
    fields: [
      { name: "firstName", label: "First name", required: true, type: "text" },
      { name: "email", label: "Work email", required: true, type: "email" },
      { name: "storeUrl", label: "Store URL (optional)", required: false, type: "text" },
      { name: "role", label: "Role", required: true, type: "select", options: ["Founder", "Marketing", "Growth", "Ecommerce", "Other"] },
    ],
  },
  {
    label: "What you need",
    fields: [
      { name: "onShopify", label: "Are you currently on Shopify?", required: true, type: "radio", options: ["Yes", "No", "I want to move to Shopify"] },
      { name: "helpWith", label: "What do you want help with?", required: true, type: "radio", options: ["Rebuilding an existing store", "CRO optimization for paid ads", "Launching a new store"] },
    ],
  },
  {
    label: "Final Bits",
    fields: [
      { name: "budget", label: "What’s your budget for this project?", required: true, type: "text" },
      { name: "notes", label: "Anything we should know? (optional)", required: false, type: "textarea" },
    ],
  },
];

export default function BookCallPopup({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // TODO: Replace with your actual Google Apps Script Web App URL
  const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyYgxD8hYCWhsWyQEme1KrTJvKnjT8ONNEV7xh54haTUYt-CbzsS7tukPxxRDDafujv/exec";

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleRadio = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleNext = () => {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 0));
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    const formBody = new URLSearchParams(form).toString();

    const res = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    await res.text(); // Apps Script returns text
    setSubmitted(true);
  } catch (err) {
    alert("There was an error submitting the form. Please try again.");
  } finally {
    setSubmitting(false);
  }
};



  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-4 p-8 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-black text-2xl">&times;</button>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            {steps.map((s, i) => (
              <div key={i} className={`flex-1 h-2 rounded-full transition-all duration-300 ${i <= step ? 'bg-[#2563EB]' : 'bg-neutral-200'}`}></div>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 text-center">
            {steps[step].label}
          </h3>
        </div>
        {submitted ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🎉</div>
            <div className="text-xl font-semibold mb-2">Thank you!</div>
            <div className="text-neutral-600">We'll be in touch soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {steps[step].fields.map((field) => (
              <div key={field.name}>
                <label className="block font-medium mb-1 text-neutral-800">
                  {field.label}{field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === "text" || field.type === "email" ? (
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  >
                    <option value="">Select...</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : field.type === "radio" ? (
                  <div className="flex flex-col gap-2">
                    {field.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name={field.name}
                          value={opt}
                          checked={form[field.name] === opt}
                          onChange={() => handleRadio(field.name, opt)}
                          required={field.required}
                          className="accent-[#2563EB] w-5 h-5"
                        />
                        <span className="text-lg">{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                ) : null}
              </div>
            ))}
            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0}
                className="rounded-full px-6 py-2 bg-neutral-100 text-neutral-700 font-semibold disabled:opacity-50"
              >
                Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full px-8 py-3 bg-[#2563EB] text-white font-bold hover:bg-[#1d3fa6] transition"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full px-8 py-3 bg-[#2563EB] text-white font-bold hover:bg-[#1d3fa6] transition"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
