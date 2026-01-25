import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "FFF – Shopify Stores That Convert",
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
        {/* Sticky Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="overflow-hidden">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
