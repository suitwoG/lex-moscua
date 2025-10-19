"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ScrollText, ShoppingBag, Trophy, User } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Learn", icon: ScrollText },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/store", label: "Store", icon: ShoppingBag },
  { href: "/profile", label: "Profile", icon: User },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-black tracking-tight text-primary"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-400 via-rose-500 to-fuchsia-500 text-base text-white shadow">
            LM
          </span>
          <span className="text-lg">Lex Moscua</span>
        </Link>

        <nav className="hidden items-center gap-3 text-sm font-semibold md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-4 py-2 transition",
                  active
                    ? "bg-primary/10 text-primary shadow-inner"
                    : "text-foreground/70 hover:bg-muted/60 hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="hidden text-xs font-bold uppercase md:inline-flex"
          >
            Daily Goal: 20 XP
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-border/60 bg-background/95 px-4 py-4 md:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition",
                    active
                      ? "bg-primary/10 text-primary shadow-inner"
                      : "bg-muted/40 text-foreground/80 hover:bg-muted/80 hover:text-foreground",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
