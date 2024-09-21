import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LHagfoss - About",
  description: "Developed by Lucas Hagfoss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
