import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tu Casa Restaurantes - Comida Salvadoreña en Portland, ME",
    short_name: "Tu Casa",
    description:
      "Ordena comida salvadoreña auténtica en Portland, ME. Pupusas, platos típicos y más con delivery rápido.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f97316",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["food", "restaurant", "delivery"],
    lang: "es",
    scope: "/",
  };
}
