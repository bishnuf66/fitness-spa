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
  title: "Fitness Spa",
  description: "Fitness single-page application",
  openGraph: {
    title: "Fitness Spa",
    description: "Achieve your fitness goals with our workout plans.",
    url: "http://localhost:3000",
    images: [
      {
        url: "http://localhost:3000/logo.png",
        width: 1200,
        height: 630,
        alt: "Fitness Spa",
      },
    ],
  },

  alternates: {
    canonical: "https://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fitness Spa",
            url: "http://localhost:3000",
            logo: "http://localhost:3000/logo.png",
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
