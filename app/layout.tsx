import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { NavBar } from "@/components/nav-bar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lex Moscua",
  description: "Duolingo-style legal learning platform for learners and admins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-slate-50 font-sans text-gray-900 antialiased",
          inter.className,
        )}
      >
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
