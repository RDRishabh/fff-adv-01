"use client";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 1); // 2.5 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FDF8F4] to-[#ffecd2]">
      <div className="bg-white rounded-3xl shadow-2xl px-8 py-12 max-w-lg w-full text-center animate-fadeIn">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold mb-2 text-[#2563EB]">Thank you!</h1>
        <p className="text-lg text-neutral-700 mb-4">Your submission was successful.<br />We'll be in touch soon.</p>
        <div className="mt-6 text-neutral-400 text-sm">Redirecting you to the homepage...</div>
      </div>
    </div>
  );
}
