import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "lhagfoss | Github",
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
