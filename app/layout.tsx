import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jiya",
  description: "Share the journey",
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
        <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
          <Navbar />
          {children}

          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <svg width="100%" height="100%">
              <pattern
                id="grid-finance"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-500 dark:text-gray-400"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-finance)" />
            </svg>
          </div>
        </div>
      </body>
    </html>
  );
}
