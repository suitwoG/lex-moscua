import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
          "min-h-screen bg-background font-sans text-foreground antialiased",
          inter.className,
        )}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 bg-gradient-to-b from-background via-background/90 to-background">
            <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
