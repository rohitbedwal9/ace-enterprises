import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ace Enterprises",
  description: "Ace Enterprises is a distinguished civil construction company that has been setting the standard since 2012. Renowned for our unwavering commitment to innovation and quality, we have left an indelible mark on numerous government projects, proudly collaborating with both the Central and Uttarakhand Government.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
