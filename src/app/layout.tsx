import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kleeblatt Space | Tools for real games",
  description: "Compact, transparent tools for game assets, pipelines, and playable worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
