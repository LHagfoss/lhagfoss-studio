import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "LHagfoss | Home",
  description: "Developed by Lucas Hagfoss",
  openGraph: {
    title: "LHagfoss | Home",
    description: "Developed by Lucas Hagfoss",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1211753398492471297/1276091668382351380/IMG_20240822_101225.jpg?ex=66e3f3fa&is=66e2a27a&hm=1df0ac7dda23ef4c5803a30cd2c81b75a45808fcf66a8a95c499785710f0be88&",
        width: 800,
        height: 600,
        alt: "Thumbnail image description",
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
      </body>
    </html>
  );
}
