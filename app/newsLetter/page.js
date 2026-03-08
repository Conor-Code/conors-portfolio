import Link from 'next/link';
import { getAllPosts, getPostsByMonth } from '@/lib/newsletter';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';

export const metadata = {
  title: 'Newsletter',
  description: 'Weekly build updates, learnings, and progress on The Daily Ship.',
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase();
}

export default function NewsletterPage() {
  const posts = getAllPosts();
  const months = getPostsByMonth();

  return (
    <div className="max-w-4xl mx-auto px-5 pt-4 sm:pt-12 pb-20">
      <div className="mb-10 opacity-0 animate-fade-up">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
          Newsletter
        </h1>
        {/* Subscribe - outside the flex row */}
        <div className="mt-4 max-w-md opacity-0 animate-fade-up stagger-3">
          <NewsletterSubscribe />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Browse by Date - Sidebar */}
        <aside className="md:w-48 shrink-0 opacity-0 animate-fade-up stagger-1">
          <h2 className="font-display font-semibold text-sm text-text-muted uppercase tracking-wider mb-3">
            Browse By Date
          </h2>
          <nav className="flex flex-row flex-wrap md:flex-col gap-1">
            {months.map((month) => (
              <a
                key={month.key}
                href={`#${month.key}`}
                className="text-sm font-body text-text-secondary hover:text-accent transition-colors"
              >
                {month.label}{' '}
                <span className="text-text-muted">({month.count})</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Post List */}
        <div className="flex-1 opacity-0 animate-fade-up stagger-2">
          {posts.length === 0 ? (
            <p className="text-text-muted font-body text-sm">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="flex flex-col">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/newsLetter/${post.slug}`}
                  className="group py-4 border-b border-border last:border-b-0 transition-colors hover:border-border-hover"
                >
                  <h3 className="font-display font-semibold text-base text-accent group-hover:text-accent-hover transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs font-body text-text-muted mt-1 tracking-wide">
                    {formatDate(post.date)}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
