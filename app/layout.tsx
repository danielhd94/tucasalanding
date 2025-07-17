import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu casa restaurantes - El buen sabor, hecho con amor",
  description: "Restaurante con delivery, pickup y la mejor comida hecha con amor. Llámanos al +1 5514822835",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
