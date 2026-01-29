export default function Footer() {
  return (
    <footer className="bg-[#FDF8F4]">

      {/* Bottom Footer */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 md:grid-cols-4">
            
            {/* Brand + Email */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="French Fry Features" className="h-10 w-auto" />
              </div>
              <p className="mb-4 text-sm text-neutral-500">
                Shopify stores built to convert and scale.
              </p>
              <a 
                href="mailto:hello@fff.agency" 
                className="text-lg font-semibold text-neutral-900 hover:text-[#ff7a00] transition"
              >
                hello@fff.agency
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <p className="mb-4 text-sm font-semibold text-neutral-900">
                Quick Links
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li><a href="#proof" className="hover:text-[#ff7a00] transition">Proof</a></li>
                <li><a href="#what-we-do" className="hover:text-[#ff7a00] transition">What we do</a></li>
                <li><a href="#how-it-works" className="hover:text-[#ff7a00] transition">How it works</a></li>
                <li><a href="#book-call" className="hover:text-[#ff7a00] transition">Book a Call</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="mb-4 text-sm font-semibold text-neutral-900">
                Connect
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li><a href="#" className="hover:text-[#ff7a00] transition">Instagram</a></li>
                <li><a href="#" className="hover:text-[#ff7a00] transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#ff7a00] transition">Twitter</a></li>
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © 2026 French Fry Features. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-neutral-800 transition">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-800 transition">Terms of Service</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
