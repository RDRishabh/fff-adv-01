import { Check, X } from "lucide-react";

export default function FitCheckSection() {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Who we’re a good fit for <br className="hidden sm:block" />
              <span className="text-[#2563EB]">(and who we’re not)</span>
            </h2>
          </div>

          {/* RIGHT – CARD */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white to-[#F8FAFF] p-[1px] shadow-xl">
            <div className="rounded-[22px] bg-white/90 backdrop-blur px-8 py-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />

                {/* GOOD FIT */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF3] text-[#16A34A] text-sm font-semibold shadow-sm">
                    <Check size={14} strokeWidth={3} />
                    Great fit
                  </span>

                  <ul className="mt-6 space-y-5">
                    {[
                      "You’re a US-based D2C brand doing around 1 year or 7-8/months.",
                      "You already run or plan to run paid ads on Meta/Google.",
                      "You’re ready to invest once in a store that can support growth for the next 12–24 months.",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <span className="inline-flex shrink-0 w-6 h-6 rounded-full bg-[#D1FAE5] items-center justify-center text-[#16A34A] shadow">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span className="text-neutral-800 text-lg leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NOT A FIT */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-sm font-semibold shadow-sm">
                    <X size={14} strokeWidth={3} />
                    Not a fit
                  </span>

                  <ul className="mt-6 space-y-5">
                    {[
                      "You’re just testing a product with no clear budget for traffic.",
                      "You need a super-custom app or a marketplace build.",
                      "You’re not focused on marketing and growth right now.",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <span className="inline-flex shrink-0 w-6 h-6 rounded-full bg-[#FEE2E2] items-center justify-center text-[#DC2626] shadow">
                          <X size={14} strokeWidth={3} />
                        </span>
                        <span className="text-neutral-800 text-lg leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
