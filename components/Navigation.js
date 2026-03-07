'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home',    href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About',    href: '/about' },
  { label: 'X',        href: 'https://x.com/Conor_Code', external: true },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-bg-primary/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display font-semibold text-text-primary text-sm tracking-tight hidden sm:inline">
            Conor Collins
          </span>
          <span className="font-display font-semibold text-text-primary text-sm tracking-tight sm:hidden">
            Conor C.
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-sm font-body text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all duration-200 flex items-center gap-1.5"
                >
                  {item.label}
                  <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-body transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-bg-tertiary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}