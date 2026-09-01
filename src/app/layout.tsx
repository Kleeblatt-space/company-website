import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kleeblatt Space | Dein digitaler Workspace",
  description: "Die moderne Plattform für innovative Teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
