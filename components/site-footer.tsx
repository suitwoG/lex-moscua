export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Lex Moscua. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="transition hover:text-primary"
            aria-label="Terms of Service"
          >
            Terms
          </a>
          <a
            href="#"
            className="transition hover:text-primary"
            aria-label="Privacy Policy"
          >
            Privacy
          </a>
          <a
            href="#"
            className="transition hover:text-primary"
            aria-label="Contact Support"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
