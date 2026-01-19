import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings, Inter for body
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evergreen B&D | Trusted Builders in Coimbatore",
  description: "Building Dreams, Delivering Trust with over 25 years of excellence in residential and commercial construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
