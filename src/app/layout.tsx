import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrightSmile Dental Clinic - Caring for Your Smile with Expertise",
  description: "BrightSmile Dental Clinic provides comprehensive dental care with modern technology and compassionate service. Schedule your appointment today for expert dental treatments.",
  keywords: "dental clinic, dentist, teeth cleaning, dental implants, orthodontics, cosmetic dentistry, emergency dental care",
  openGraph: {
    title: "BrightSmile Dental Clinic",
    description: "Comprehensive dental care with modern technology and compassionate service",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
