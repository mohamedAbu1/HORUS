import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HORUS — Alabaster Atelier",
  description: "Material, illuminated. A contemporary alabaster atelier for spaces, objects, and light.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0b0a08]">
      <body className="antialiased">{children}</body>
    </html>
  );
}
