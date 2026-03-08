import WaitlistForm from '@/components/WaitlistForm';
import Link from 'next/link';

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Daily post ideas',
    desc: 'Personalized suggestions based on trends, your stack, and your latest GitHub activity.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Commits → threads',
    desc: 'One-click generation of full threads from your latest commits in your voice.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Sounds like you',
    desc: 'Trains on your past posts so every post idea is authentic to you. Not AI-generated slop.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile-first PWA',
    desc: 'Generate and post from anywhere, coffee shop, bed, commute. No excuses.',
  },
];

export default function Home() {
  return (
    <div className="bg-grid bg-radial-fade">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-5 pt-24 sm:pt-30 pb-16">

        {/* Product Name */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-3 text-accent opacity-0 animate-fade-up stagger-1">
          The Daily Ship
        </h1>

        {/* Tagline */}
        <p className="font-display font-semibold text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight mb-6 opacity-0 animate-fade-up stagger-1">
          <span className="text-text-primary">Ship daily. Share daily.</span>
          <br />
          <span className="text-text-primary">Turn code into</span>{' '}
          <span className="text-accent">connection.</span>
        </p>

        {/* Subtitle */}
        <p className="text-text-secondary font-body text-base sm:text-lg leading-relaxed max-w-xl mb-4 opacity-0 animate-fade-up stagger-2">
          You ship code every day, but turning commits and ideas into posts that feel authentic takes time.
        </p>
        <p className="text-text-secondary font-body text-base sm:text-lg leading-relaxed max-w-xl mb-1 opacity-0 animate-fade-up stagger-2">
          <span className="text-text-primary font-medium"> The Daily Ship</span> changes that. Effortlessly.
        </p>
        <p className="mb-4 opacity-0 animate-fade-up stagger-2">
          <Link
            href="/newsLetter/the-beginning"
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover transition-colors font-body"
          >
            Read more about The Daily Ship
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>

        {/* Waitlist CTA */}
        <div className="max-w-md opacity-0 animate-fade-up stagger-3">
          <WaitlistForm />
        </div>

        {/* Credibility line */}
        <div className="mt-8 flex flex-wrap items-center gap-x-1.5 gap-y-1 opacity-0 animate-fade-up stagger-4">
        <span className="text-xs text-text-muted font-body">Built by</span>
          <a
            href="https://x.com/Conor_Code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors font-body"
          >
            Conor (@Conor_Code)
            <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="text-xs text-text-muted font-body">
            previously shipped{' '}
            <Link href="/projects" className="text-text-secondary hover:text-accent transition-colors underline decoration-border underline-offset-2">
              XRA & more
            </Link>
          </span>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-3xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-bg-secondary/60 border border-border rounded-2xl p-5 card-hover opacity-0 animate-fade-up stagger-${i + 3}`}
            >
              <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center text-accent mb-3">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-sm text-text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary font-body leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Emotional benefit */}
        <div className="mt-12 text-center opacity-0 animate-fade-up stagger-6">
          <p className="text-text-secondary font-body text-sm sm:text-base italic max-w-lg mx-auto">
            &ldquo;Consistency compounds. Share your wins, learnings, and fixes daily.
            Watch your audience (and opportunities) grow naturally.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-xs text-text-muted font-body">Building in public —</span>
            <a
              href="https://x.com/Conor_Code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:text-accent-hover transition-colors font-body"
            >
              follow along on X
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
