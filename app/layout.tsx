import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Playfair_Display, Montserrat, Open_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tu Casa Restaurantes | Auténtica Comida Salvadoreña en Portland, ME",
  description: "Order authentic Salvadoran food in Portland, ME. Pupusas, traditional dishes and more prepared fresh in 20-25 minutes. Breakfast, lunch and dinner. Order online or call +1 (207) 536-0016!",
  keywords: "restaurante salvadoreño Portland ME, comida latina Portland, pupusas Portland, comida salvadoreña Maine, restaurant delivery Portland, Tu Casa Restaurantes, desayuno salvadoreño, almuerzo latino Portland",
  authors: [{ name: "Tu Casa Restaurantes" }],
  creator: "Tu Casa Restaurantes",
  publisher: "Tu Casa Restaurantes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tucasarestaurantes.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://tucasarestaurantes.com",
    siteName: "Tu Casa Restaurantes",
    title: "Tu Casa Restaurantes | Auténtica Comida Salvadoreña en Portland, ME",
    description: "Order authentic Salvadoran food in Portland, ME. Pupusas, traditional dishes and more prepared fresh in 20-25 minutes. Breakfast, lunch and dinner.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tu Casa Restaurantes - Comida Salvadoreña Auténtica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Casa Restaurantes | Comida Salvadoreña en Portland, ME",
    description: "Order authentic Salvadoran food. Pupusas, traditional dishes prepared fresh in 20-25 minutes. Order online now!",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Usuario debe agregar su código
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://tucasarestaurantes.com",
  name: "Tu Casa Restaurantes",
  image: "https://tucasarestaurantes.com/hero.jpg",
  description: "Authentic Salvadoran food restaurant in Portland, Maine. We offer breakfast, lunch and dinner with fresh preparation in 20-25 minutes and delivery service.",
  servesCuisine: ["Salvadoran", "Latin American"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "70 Washington Ave",
    addressLocality: "Portland",
    addressRegion: "ME",
    postalCode: "04101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.6591",
    longitude: "-70.2568",
  },
  telephone: "+12075360016",
  url: "https://tucasarestaurantes.com",
  menu: "https://online.tucasarestaurantes.com/",
  acceptsReservations: "True",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/tucasarestaurantes",
    "https://www.instagram.com/tucasarestaurantes",
  ],
  potentialAction: {
    "@type": "OrderAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://online.tucasarestaurantes.com/",
      inLanguage: "es",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`antialiased ${playfair.variable} ${montserrat.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
