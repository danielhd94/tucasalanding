import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Playfair_Display, Montserrat, Open_Sans } from "next/font/google";
import { BUSINESS_INFO } from "../lib/constants";

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
  title: `${BUSINESS_INFO.name} | Authentic Salvadoran Food in Portland, ME`,
  description: `Order authentic Salvadoran food in Portland, ME. Pupusas, traditional dishes and more prepared fresh in 20-25 minutes. Breakfast, lunch and dinner. Order online or call ${BUSINESS_INFO.phoneFormatted}!`,
  keywords: "restaurante salvadoreño Portland ME, comida latina Portland, pupusas Portland, comida salvadoreña Maine, restaurant delivery Portland, Tu Casa Restaurantes, Salvadoran restaurant, Latin food Portland, authentic pupusas, traditional Salvadoran cuisine",
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  applicationName: BUSINESS_INFO.name,
  category: "Restaurant",
  classification: "Food & Dining",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BUSINESS_INFO.website),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS_INFO.website,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} | Authentic Salvadoran Food in Portland, ME`,
    description: "Authentic Salvadoran food in Portland, ME. Traditional dishes prepared fresh in 20-25 minutes.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Authentic Salvadoran Food`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} | Salvadoran Food in Portland, ME`,
    description: "Authentic Salvadoran food. Traditional dishes prepared fresh in 20-25 minutes. Order online now!",
    images: ["/hero.jpg"],
  },
  verification: {
    google: "google-site-verification-code", // Usuario debe agregar su código
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": BUSINESS_INFO.website,
  name: BUSINESS_INFO.name,
  alternateName: BUSINESS_INFO.alternateName,
  image: [
    `${BUSINESS_INFO.website}/hero.jpg`,
    `${BUSINESS_INFO.website}/logo192.png`
  ],
  logo: `${BUSINESS_INFO.website}/logo192.png`,
  description: "Authentic Salvadoran food restaurant in Portland, Maine. We offer breakfast, lunch and dinner with fresh preparation in 20-25 minutes and delivery service.",
  slogan: "The taste of home",
  servesCuisine: ["Salvadoran", "Latin American", "Central American"],
  priceRange: BUSINESS_INFO.priceRange,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS_INFO.rating,
    reviewCount: BUSINESS_INFO.reviewCount,
    bestRating: "5",
    worstRating: "1"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address,
    addressLocality: BUSINESS_INFO.city,
    addressRegion: BUSINESS_INFO.state,
    postalCode: BUSINESS_INFO.zipCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_INFO.latitude,
    longitude: BUSINESS_INFO.longitude,
  },
  telephone: BUSINESS_INFO.phone,
  url: BUSINESS_INFO.website,
  menu: BUSINESS_INFO.menuUrl,
  acceptsReservations: "True",
  hasMenu: {
    "@type": "Menu",
    name: `${BUSINESS_INFO.name} Menu`,
    url: BUSINESS_INFO.menuUrl,
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Breakfast",
        description: "Traditional Salvadoran breakfast dishes"
      },
      {
        "@type": "MenuSection",
        name: "Lunch",
        description: "Authentic Salvadoran lunch specialties"
      },
      {
        "@type": "MenuSection",
        name: "Dinner",
        description: "Traditional Salvadoran dinner favorites"
      }
    ]
  },
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
  potentialAction: [
    {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: BUSINESS_INFO.menuUrl,
        inLanguage: "en",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
    },
    {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `tel:${BUSINESS_INFO.phone}`,
        actionPlatform: "http://schema.org/TelephonePlatform"
      }
    }
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Online Ordering",
      description: "Order authentic Salvadoran food online",
      url: BUSINESS_INFO.menuUrl,
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Delivery Service",
      description: "Fast delivery service",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Rich Snippets Meta Tags */}
        <meta name="geo.region" content={`US-${BUSINESS_INFO.state}`} />
        <meta name="geo.placename" content={BUSINESS_INFO.city} />
        <meta name="geo.position" content={`${BUSINESS_INFO.latitude};${BUSINESS_INFO.longitude}`} />
        <meta name="ICBM" content={`${BUSINESS_INFO.latitude}, ${BUSINESS_INFO.longitude}`} />

        {/* Business Information */}
        <meta name="business:contact_data:street_address" content={BUSINESS_INFO.address} />
        <meta name="business:contact_data:locality" content={BUSINESS_INFO.city} />
        <meta name="business:contact_data:region" content={BUSINESS_INFO.state} />
        <meta name="business:contact_data:postal_code" content={BUSINESS_INFO.zipCode} />
        <meta name="business:contact_data:country_name" content={BUSINESS_INFO.country} />
        <meta name="business:contact_data:phone_number" content={BUSINESS_INFO.phone} />
        <meta name="business:contact_data:website" content={BUSINESS_INFO.website} />

        {/* Restaurant Specific */}
        <meta name="restaurant:menu" content={BUSINESS_INFO.menuUrl} />
        <meta name="restaurant:reservations" content={`tel:${BUSINESS_INFO.phone}`} />
        <meta name="restaurant:price_range" content={BUSINESS_INFO.priceRange} />
        <meta name="restaurant:cuisine" content={BUSINESS_INFO.cuisine} />
        <meta name="restaurant:opening_hours" content={BUSINESS_INFO.openingHours} />

        {/* Additional SEO */}
        <meta name="rating" content={BUSINESS_INFO.rating} />
        <meta name="review-count" content={BUSINESS_INFO.reviewCount} />
        <meta name="accepts-reservations" content="true" />
        <meta name="serves-alcohol" content="false" />
        <meta name="takeout" content="true" />
        <meta name="delivery" content="true" />

        {/* Structured Data */}
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
