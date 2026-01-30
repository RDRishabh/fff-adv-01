"use client";
import { useState, useEffect } from "react";

const steps = [
  {
    label: "Quick Intro",
    fields: [
      { name: "firstName", label: "Name", required: true, type: "text" },
      { name: "email", label: "Work email", required: true, type: "email" },
      { name: "storeUrl", label: "Store URL (optional)", required: false, type: "text" },
      { name: "role", label: "Industry", required: true, type: "select", options: [
        "E-Commerce",
        "Dropshipping",
        "EdTech",
        "Health & Wellness",
        "Fashion & Apparel",
        "Beauty & Personal Care",
        "Home & Living",
        "Food & Beverage",
        "Electronics",
        "Automotive",
        "B2B",
        "Services",
        "Other"
      ] },
    ],
  },
  {
    label: "What you need",
    fields: [
      { name: "onShopify", label: "Are you currently on Shopify?", required: true, type: "radio", options: ["Yes", "No", "I want to move to Shopify"] },
      // helpWith will be conditionally rendered in the form, not here
    ],
  },
  {
    label: "Final Bits",
    fields: [
      { name: "phone", label: "Phone number", required: true, type: "text" },
      { name: "notes", label: "Anything we should know? (optional)", required: false, type: "textarea" },
    ],
  },
];

export default function BookCallPopup({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ countryCode: '+91' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
      if (!submitted) return;
      const timeout = setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.href = "/ThankYou";
        }
      }, 1800); // 1.8 seconds for a quick transition
      return () => clearTimeout(timeout);
    }, [submitted]);

  // TODO: Replace with your actual Google Apps Script Web App URL
  const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyUX2iZ_nN8fTOkF3bkstjLWbmX098WZf7ItZ37b6uSHXGfA3Ah2tXVVgYOrF-SWn36/exec";

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'countryCode') {
      // Always keep '+' at the start, only allow digits after
      let val = value.startsWith('+') ? value : '+' + value.replace(/[^\d]/g, '');
      if (val === '') val = '+';
      val = '+' + val.slice(1).replace(/[^\d]/g, '');
      setForm((f) => ({ ...f, countryCode: val }));
    } else if (name === 'phone') {
      setForm((f) => ({ ...f, phone: value.replace(/[^\d]/g, '') }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleRadio = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Validation logic for each step
  const validateStep = () => {
    const currentFields = steps[step].fields || [];
    let newErrors = {};
    currentFields.forEach((field) => {
      if (field.required) {
        if (!form[field.name] || form[field.name].trim() === "") {
          newErrors[field.name] = `${field.label} is required`;
        } else if (field.type === "email") {
          // Basic email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(form[field.name])) {
            newErrors[field.name] = "Enter a valid email address";
          }
        } else if (field.name === "phone") {
          const fullPhone = `${form.countryCode}${form.phone}`;

          // + followed by 10–15 digits total
          const phoneRegex = /^\+\d{10,15}$/;

          if (!phoneRegex.test(fullPhone)) {
            newErrors.phone =
              "Enter a valid phone number with country code (e.g. +919876543210)";
          }
        }
      }
    });
    // Special case for helpWith
    if (step === 1 && form.onShopify && form.onShopify !== 'I want to move to Shopify') {
      if (!form.helpWith) {
        newErrors.helpWith = "Please select an option";
      }
    }
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateStep();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    // If on 'What you need' step and user selected 'I want to move to Shopify', skip helpWith and go to Final Bits
    if (step === 1 && form.onShopify === 'I want to move to Shopify') {
      setStep(2);
    } else {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    }
  };
  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 0));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmitting(true);

    try {
      const payload = {
        ...form,
        phone: `${form.countryCode}${'-'}${form.phone}`,
      };
      delete payload.countryCode;
      const formBody = new URLSearchParams(payload).toString();

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
            {/* Render fields for current step */}
            {steps[step].fields.map((field) => {
              // Only render helpWith if onShopify is answered and not 'I want to move to Shopify'
              if (field.name === 'helpWith') return null;
              return (
                <div key={field.name}>
                  <label className="block font-medium mb-1 text-neutral-800">
                    {field.label}{field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === "text" && field.name === "phone" ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="countryCode"
                        value={form.countryCode || '+91'}
                        onChange={handleChange}
                        required
                        maxLength={5}
                        style={{ width: '70px' }}
                        className="rounded-xl border border-neutral-200 px-2 py-3 text-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone || ''}
                        onChange={handleChange}
                        required={field.required}
                        placeholder="9876543210"
                        className="flex-1 rounded-xl border border-neutral-200 px-4 py-3 text-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                  ) : field.type === "text" || field.type === "email" ? (
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
                  {errors[field.name] && (
                    <div className="text-red-500 text-sm mt-1">{errors[field.name]}</div>
                  )}
                </div>
              );
            })}

            {/* Conditionally render helpWith with options based on onShopify answer */}
            {step === 1 && form.onShopify && form.onShopify !== 'I want to move to Shopify' && (
              <div>
                <label className="block font-medium mb-1 text-neutral-800">
                  What do you want help with?<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-2">
                  {(form.onShopify === 'Yes'
                    ? ['Rebuilding an existing store', 'CRO optimization for paid ads']
                    : form.onShopify === 'No'
                    ? ['Launching a new store']
                    : [])
                    .map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="helpWith"
                          value={opt}
                          checked={form.helpWith === opt}
                          onChange={() => handleRadio('helpWith', opt)}
                          required
                          className="accent-[#2563EB] w-5 h-5"
                        />
                        <span className="text-lg">{opt}</span>
                      </label>
                    ))}
                </div>
                {errors.helpWith && (
                  <div className="text-red-500 text-sm mt-1">{errors.helpWith}</div>
                )}
              </div>
            )}
            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-full px-6 py-2 bg-neutral-100 text-neutral-700 font-semibold disabled:opacity-50"
                disabled={step === 0 || submitting}
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
