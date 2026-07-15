import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://uttarayanthehomestay.com"),
  title: {
    default: "Uttarayan The Homestay | Best Homestay in Almora",
    template: "%s | Uttarayan The Homestay Almora"
  },
  description: "Experience a peaceful Himalayan retreat at Uttarayan The Homestay in Almora. Enjoy traditional Kumaoni hospitality, breathtaking views of Nanda Devi, and modern comforts.",
  keywords: ["Almora homestay", "best homestay in Almora", "Himalayan retreat", "Kumaoni hospitality", "Nanda Devi view", "Uttarakhand homestay", "luxury homestay Almora"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Uttarayan The Homestay | Best Homestay in Almora",
    description: "Experience a peaceful Himalayan retreat at Uttarayan The Homestay in Almora. Enjoy traditional Kumaoni hospitality.",
    siteName: "Uttarayan The Homestay",
    images: [{ url: "/hero_new.png", width: 1200, height: 630, alt: "Uttarayan The Homestay Almora" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Uttarayan The Homestay",
              image: "https://uttarayanthehomestay.com/hero_new.png",
              description: "Experience a peaceful Himalayan retreat at Uttarayan The Homestay in Almora.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dharanaula",
                addressLocality: "Almora",
                addressRegion: "Uttarakhand",
                postalCode: "263601",
                addressCountry: "IN"
              },
              telephone: "+91-7891109555",
              email: "Uttarayanthehomestay6@gmail.com",
              url: "https://uttarayanthehomestay.com",
              priceRange: "$$"
            })
          }}
        />
      </head>
      <body className="bg-surface-bright text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed-variant flex flex-col min-h-screen">
        <div className="grain-overlay"></div>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
