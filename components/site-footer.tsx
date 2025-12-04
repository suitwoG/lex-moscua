export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Lex Moscua. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="transition hover:text-emerald-600"
            aria-label="Terms of Service"
          >
            Terms
          </a>
          <a
            href="#"
            className="transition hover:text-emerald-600"
            aria-label="Privacy Policy"
          >
            Privacy
          </a>
          <a
            href="#"
            className="transition hover:text-emerald-600"
            aria-label="Contact Support"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
