import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ace-Enterprises",
  description: "Created by Binary-Bridge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
