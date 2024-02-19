import type { Metadata } from "next";
import './globals.css'
import ThemeRegistry from './component/ThemeRegistry'

export const metadata: Metadata = {
  title: "Terior",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>

    </html>
  );
}
