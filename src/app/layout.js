import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookCallProvider } from "../components/ui/BookCallContext";
import Script from "next/script";

// export const metadata = {
//   title: "French Fry Features – Shopify Stores That Convert",
//   description:
//     "Launch a professionally built Shopify store designed to convert and scale.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W2KB3VDM');
          `}
        </Script>
       
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1411291903775804');
            fbq('track', 'PageView');
          `}
        </Script>
        
        <Script id="gtm-pageview" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtmTrackPageView() {
              window.dataLayer.push({ event: 'pageview', page: window.location.pathname });
            }
            gtmTrackPageView();
            window.addEventListener('popstate', gtmTrackPageView);
            window.addEventListener('pushstate', gtmTrackPageView);
            window.addEventListener('replaceState', gtmTrackPageView);
          `}
        </Script>
      </head>

      <body className="font-sans antialiased">
        {/* Client boundary starts here */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2KB3VDM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <BookCallProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </BookCallProvider>
      </body>
    </html>
  );
}
