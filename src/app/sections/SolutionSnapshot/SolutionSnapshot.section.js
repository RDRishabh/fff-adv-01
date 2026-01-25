export default function SolutionSnapshot() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold">
          What FFF does
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Professionally built Shopify pages",
            "Clean apps + key integrations",
            "Payments, shipping & analytics setup",
          ].map((text) => (
            <div
              key={text}
              className="rounded-2xl border bg-white p-8"
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-primary/20" />
              <p className="font-medium">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Optional add-ons: SEO + AEO
        </p>

        <a
          href="#book-call"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
