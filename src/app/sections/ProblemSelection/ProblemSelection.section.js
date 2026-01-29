"use client";

import { useState } from "react";
import { useBookCall } from "../../../components/ui/BookCallContext";
import {
  Paintbrush,
  FileText,
  CreditCard,
  Layers,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

function BookCallButton() {
  const { openPopup } = useBookCall() || {};
  return (
    <button
      type="button"
      onClick={openPopup}
      className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-8 py-3 text-xl font-medium text-white hover:bg-[#e66d00] transition"
    >
      See what's blocking your sales
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

export default function ProblemSelection() {
  return (
    <section className="bg-[#FDF8F4] py-12 relative min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        {/* Grid container with items-start - CRITICAL for sticky */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Content */}
          <div className="flex flex-col space-y-14 lg:pr-12">
            {/* Hero text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                Be honest{" "}
                <span className="text-black">
                  is your store holding your{" "}
                  <span className="text-[#FF7A00]">ads</span> back?
                </span>
              </h2>
              
              <p className="mt-6 text-xl text-neutral-600 leading-relaxed max-w-xl">
                Great ads can't save a weak store. If people don't trust your site or don't get your offer,
                they click, browse, and leave. We fix those leaks so your ad spend actually turns into sales.
              </p>
            </div>

            <div className=" flex flex-col gap-6">
              {[
                {
                  title: "Your site looks DIY",
                  desc: "People don't trust you enough to buy",
                  icon: Paintbrush,
                },
                {
                  title: "Product pages are confusing",
                  desc: "Visitors don't see why you're worth the price",
                  icon: FileText,
                },
                {
                  title: "Checkout feels risky",
                  desc: "They drop off right before paying",
                  icon: CreditCard,
                },
                {
                  title: "Too many apps and pop-ups",
                  desc: "Store slows down and hurts your ad performance",
                  icon: Layers,
                },
                {
                  title: "Tracking is messy",
                  desc: "You have no clear view of which ads are making money",
                  icon: BarChart3,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFEAD1] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#FF7A00]" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-[#ef4444]">
                      {item.title}
                    </div>
                    <div className="text-lg text-neutral-500">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <BookCallButton />
            </div>
          
          </div>

          {/* RIGHT: Professional Funnel Mockup - STICKY */}
          <div className="hidden lg:block self-start sticky top-32 lg:pl-8">
            <div className="w-full lg:w-[560px]">
              <motion.div 
                className="bg-white rounded-[32px] shadow-2xl overflow-hidden relative border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Enhanced Browser Chrome */}
                <div className="absolute top-6 right-7 flex gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                </div>

                {/* Tab Header */}
                <div className="pt-12 pb-4 px-8 border-b border-neutral-100 justify-center flex">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                      Funnel Efficiency Map
                    </h3>
                  </div>
                </div>

                {/* Funnel Container with Vertical Lines */}
                <div className="relative px-8 pb-4">
                  {/* VERTICAL CONNECTION LINES - ABSOLUTE POSITIONED */}
                  <div className="absolute inset-0 z-0 pointer-events-none left-[50%] flex flex-col ">
                    {/* Line 1: Behind first drop-off (380px to 320px width) */}
                    <div className="w-[2px] bg-gradient-to-b from-[#3B82F6]/60 to-[#60A5FA]/40 left-[50%] top-[85px] h-[120px] transform -translate-x-1/2 rounded-full shadow-sm" />
                    
                    {/* Line 2: Behind second drop-off (320px to 260px width) */}
                    <div className="w-[2px] bg-gradient-to-b from-[#60A5FA]/50 to-[#10B981]/40 left-[50%] top-[260px] h-[110px] transform -translate-x-1/2 rounded-full shadow-sm" />
                    
                    {/* Line 3: Between Add to Cart and Purchase (260px to 200px width) */}
                    <div className="w-[2px] bg-gradient-to-b from-[#10B981]/60 to-[#059669]/50 left-[50%] top-[420px] h-[70px] transform -translate-x-1/2 rounded-full shadow-sm" />
                  </div>

                  {/* Stage 1: Paid Traffic */}
                  <motion.div 
                    className="w-full max-w-[380px] mx-auto relative z-10 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-2xl px-6 py-2 text-md font-medium flex justify-between items-center shadow-2xl mb-2"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex text-md items-center gap-2">
                      <span>Paid Traffic</span>
                      <span className="text-md opacity-90">(Facebook/Google)</span>
                    </div>
                    <div className="text-sm text-base bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      ~ $1.50 CPC
                    </div>
                  </motion.div>

                  {/* Drop-off 1 */}
                  <motion.div 
                    className="w-[320px] mx-auto relative z-10 text-center mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-sm bg-gradient-to-r from-[#FEE2E2] to-[#FECACA] text-[#DC2626] px-4 py-1 rounded-full font-medium shadow-lg inline-flex items-center gap-1">
                      ⚠️ <span>Upto 40% users lost due to slow load</span>
                    </div>
                  </motion.div>

                  {/* Stage 2: Landing Page */}
                  <motion.div 
                    className="w-full max-w-[320px] mx-auto relative z-10 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white rounded-2xl px-6 py-2 text-md font-medium flex justify-between items-center shadow-xl mb-3"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex text-md items-center gap-2">
                      <span>Landing / Product Page</span>
                    </div>
                    <div className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      20% VTR
                    </div>
                  </motion.div>

                  {/* Drop-off 2 */}
                  <motion.div 
                    className="w-[260px] mx-auto relative z-10 text-center mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-xs bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] text-[#D97706] px-4 py-1 rounded-full font-medium shadow-lg inline-flex items-center gap-1">
                      ⚠️ <span>25% Add to Cart</span>
                    </div>
                  </motion.div>

                  {/* Stage 3: Add to Cart */}
                  <motion.div 
                    className="w-full max-w-[260px] mx-auto relative z-10 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white rounded-2xl px-6 py-2 text-md font-medium flex justify-between items-center shadow-2xl mb-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex text-md items-center gap-2">
                      <span>Add to Cart</span>
                    </div>
                    <div className="text-sm bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      4.2% ATC
                    </div>
                  </motion.div>

                  {/* Final Stage: Purchase */}
                  <motion.div 
                    className="w-full max-w-[200px] mx-auto relative z-10 bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399] text-white rounded-2xl px-8 py-2 text-base font-medium text-center shadow-2xl border-1 border-white/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl tracking-wider">PURCHASE</span>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Footer Stats - unchanged */}
                <div className="px-8 py-6 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] border-t border-neutral-100 justify-center flex gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FEE2E2] to-[#FECACA] flex items-center justify-center shadow-lg flex-shrink-0 mt-0.5 align-middle">
                      <span className="text-xl font-bold text-[#DC2626]">✕</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-neutral-700 leading-tight">
                        Current funnel efficiency:{" "}
                        <span className="text-[#DC2626] font-bold text-lg">1.2%</span>
                      </p>
                      <p className="text-sm text-neutral-600 leading-tight">
                        Target benchmark:{" "}
                        <span className="text-[#10B981] font-bold text-lg">3.5%+</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}