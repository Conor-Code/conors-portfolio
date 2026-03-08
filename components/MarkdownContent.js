'use client';

import ReactMarkdown from 'react-markdown';

export default function MarkdownContent({ content }) {
  return (
    <article className="prose-custom">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="font-display font-bold text-2xl text-text-primary mt-8 mb-3">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-display font-semibold text-lg text-text-primary mt-8 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-display font-semibold text-base text-text-primary mt-6 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="font-body text-[15px] text-text-secondary leading-relaxed mb-4 space-y-1.5 ml-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="font-body text-[15px] text-text-secondary leading-relaxed mb-4 space-y-1.5 ml-1 list-decimal list-inside">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-2">
              <span className="text-accent mt-2 text-[6px]">●</span>
              <span>{children}</span>
            </li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover underline decoration-accent/30 underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-text-primary">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-text-secondary">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-accent/40 pl-4 my-4 italic text-text-muted">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="font-mono text-sm bg-bg-tertiary text-accent px-1.5 py-0.5 rounded">
              {children}
            </code>
          ),
          hr: () => (
            <hr className="border-border my-8" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
