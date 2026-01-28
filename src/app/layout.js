
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookCallProvider } from "../components/ui/BookCallContext";

export const metadata = {
  title: "French Fry Features – Shopify Stores That Convert",
  description:
    "Launch a professionally built Shopify store designed to convert and scale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <BookCallProvider>
          {/* Sticky Navbar */}
          <Navbar />

          {/* Page Content */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </BookCallProvider>
      </body>
    </html>
  );
}
