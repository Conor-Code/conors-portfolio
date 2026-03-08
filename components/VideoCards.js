function getVideoId(url) {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : '';
}

export default function VideoCards({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="mt-10 mb-6">
      <h2 className="font-display font-semibold text-lg text-text-primary mb-4">
        Videos I found cool this week
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {videos.map((video) => {
          const videoId = getVideoId(video.url);
          const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden border border-border bg-bg-secondary/60 card-hover"
            >
              <div className="relative aspect-video">
                <img
                  src={thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-body text-text-secondary group-hover:text-text-primary transition-colors line-clamp-2">
                  {video.title}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}