import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LexPortugal AI Showcase",
  description: "Portfolio showcase for an AI-powered Portuguese citizenship workflow platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
