import Link from 'next/link';
import { getPostBySlug, getAllPosts, getAllSlugs } from '@/lib/newsletter';
import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
<<<<<<< HEAD
import VideoCards from '@/components/VideoCards';
=======
>>>>>>> bdda4a93c2fc445c9c35bbfae468a53c5fc4d585

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Conor`,
    description: `Newsletter: ${post.title}`,
  };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function NewsletterPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get prev/next posts
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-5 pt-4 sm:pt-12 pb-20">
      {/* Back link */}
      <Link
        href="/newsLetter"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors font-body mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        All posts
      </Link>

      {/* Post header */}
      <div className="mb-8 opacity-0 animate-fade-up">
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-2">
          {post.title}
        </h1>
        <p className="text-sm font-body text-text-muted">
          {formatDate(post.date)}
        </p>
      </div>

      {/* Post content */}
      <div className="opacity-0 animate-fade-up stagger-1">
        <MarkdownContent content={post.content} />
      </div>

<<<<<<< HEAD
      {/* Videos */}
      <div className="opacity-0 animate-fade-up stagger-2">
        <VideoCards videos={post.videos} />
      </div>

=======
>>>>>>> bdda4a93c2fc445c9c35bbfae468a53c5fc4d585
      {/* Subscribe CTA */}
      <div className="mt-12 p-6 bg-bg-secondary/60 border border-border rounded-2xl opacity-0 animate-fade-up stagger-2">
        <p className="font-display font-semibold text-sm text-text-primary mb-3">
            Enjoyed this? Get the next one in your inbox.
        </p>
        <NewsletterSubscribe />
      </div>

      {/* Prev / Next navigation */}
      <div className="mt-14 pt-6 border-t border-border flex items-start justify-between gap-4 opacity-0 animate-fade-up stagger-2">
        {prevPost ? (
          <Link
            href={`/newsLetter/${prevPost.slug}`}
            className="group flex flex-col"
          >
            <span className="text-xs text-text-muted font-body mb-1">Previous</span>
            <span className="text-sm font-display font-semibold text-text-secondary group-hover:text-accent transition-colors">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/newsLetter/${nextPost.slug}`}
            className="group flex flex-col text-right"
          >
            <span className="text-xs text-text-muted font-body mb-1">Next</span>
            <span className="text-sm font-display font-semibold text-text-secondary group-hover:text-accent transition-colors">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
