export default function About() {
  const stack = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['FastAPI', 'Python', 'Node.js'] },
    { category: 'Data', items: ['Supabase', 'PostgreSQL', 'Mongo DB'] },
    { category: 'AI / ML', items: ['Ollama', 'Grok', 'Claude'] },
    { category: 'Infra', items: ['Vercel', 'Railway', 'Extensions'] },
  ];

  return (
    <div className="max-w-3xl mx-auto px-5 pt-12 sm:pt-12 pb-20">
      {/* Header */}
      <div className="mb-10 opacity-0 animate-fade-up">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
          About
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10">
        {/* Bio */}
        <div className="opacity-0 animate-fade-up stagger-1">
          <div className="space-y-4 text-text-secondary font-body text-[15px] leading-relaxed">
            <p>
              Hey, I&apos;m <span className="text-text-primary font-medium">Conor</span>, a 23-year-old developer based in Ireland.<br></br>
              I graduated with a degree in Computer Science from TU Dublin. <br></br>
              And now I build apps in public.
            </p>
            <p>
              I ship indie projects, grow my developer audience on X, and document the entire process.
              My goal is simple, provide value with the things I create, and make a living doing it.
            </p>
            <p>
              Right now I&apos;m focused on{' '}
              <span className="text-accent font-medium">The Daily Ship</span>, a tool
              that helps devs turn their GitHub activity and post ideas into authentic X content.<br></br>
              Before that, I built XRA (an AI reply assistant for X). <br></br> 
              Program-Pit (AI-powered gamified coding trainer).
            </p>
            <p>
              Outside of code, you&apos;ll find me in the gym. I also enjoy camping, travelling, and learning.
            </p>
            <p>
              I hope you can find value in the tools I build.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://x.com/Conor_Code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-secondary border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200 font-body"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @Conor_Code
            </a>
            <a
              href="https://github.com/Conor-Code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-secondary border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200 font-body"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Conor-Code
            </a>
          </div>
        </div>

        {/* Profile Photo Placeholder */}
        <div className="opacity-0 animate-fade-up stagger-2 order-first md:order-last">
          <div className="w-full max-w-[200px] mx-auto md:mx-0 aspect-square rounded-2xl bg-bg-secondary border border-border overflow-hidden flex items-center justify-center">
            {/* Replace this div with an actual Image component when you have a photo */}
            <img
              src="/profile.JPG"
              alt="Conor Collins"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-text-muted text-center md:text-left mt-2 font-body">
            {/* Add caption when you add photo */}
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-14 opacity-0 animate-fade-up stagger-3">
        <h2 className="font-display font-semibold text-lg text-text-primary mb-5">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {stack.map((group) => (
            <div key={group.category} className="bg-bg-secondary/60 border border-border rounded-xl p-4">
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-2">
                {group.category}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <p key={item} className="text-sm text-text-secondary font-body">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
