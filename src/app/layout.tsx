import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Exoplanet Database",
  description: "A preview page for KDL RSE job application",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 pt-[72px] bg-[url('/static/images/ariel_space_high_res1.jpg')] bg-cover bg-center bg-no-repeat">
          {children}
        </main>
      </body>
    </html>
  );
}
