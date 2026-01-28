import { useBookCall } from "../../../components/ui/BookCallContext";

export default function FinalCTA() {
  const { openPopup } = useBookCall() || {};
  return (
    <section className="py-24 bg-primary text-white text-center">
      <h2 className="text-4xl font-bold">
        Launch a professionally built Shopify store.
      </h2>

      <button
        type="button"
        onClick={openPopup}
        className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary"
      >
        Book a Call
      </button>

      <p className="mt-4 text-sm opacity-90">
        Limited slots each week.
      </p>
    </section>
  );
}
