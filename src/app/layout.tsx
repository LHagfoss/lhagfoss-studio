import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from 'nextjs-google-analytics';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "lhagfoss - Home",
  description: "Developed by Lucas Hagfoss",
  openGraph: {
    title: "lhagfoss",
    description: "Developed by Lucas Hagfoss",
    images: [
      {
        url: "../../assets/thumbnail.png",
        width: 800,
        height: 600,
        alt: "lhagfoss image",
      },
    ],
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
        <GoogleAnalytics trackPageViews />
      </body>
    </html>
  );
}
