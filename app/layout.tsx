import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ 
  weight: ['400', '400'], // ระบุความหนา
  subsets: ['latin', 'thai'], // ระบุภาษา
  variable: '--font-kanit', // สร้างเป็น CSS Variable
})

export const metadata: Metadata = {
  title: "Valentiny Love Memo",
  description: "Valentiny Love Memo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
