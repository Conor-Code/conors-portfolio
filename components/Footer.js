import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted font-body">
          Built with ❤️ by Conor.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://x.com/Conor_Code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-secondary transition-colors text-sm font-body"
          >
            X
          </a>
          <a
            href="https://github.com/Conor-Code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-secondary transition-colors text-sm font-body"
          >
            GitHub
          </a>
          <Link
            href="/projects"
            className="text-text-muted hover:text-text-secondary transition-colors text-sm font-body"
          >
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
