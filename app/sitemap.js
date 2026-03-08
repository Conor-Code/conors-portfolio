import { getAllPosts } from '@/lib/newsletter';

export default function sitemap() {
  const siteUrl = 'https://conor-code.vercel.app';

  const staticPages = [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/projects`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/newsLetter`, lastModified: new Date() },
  ];

  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/newsLetter/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...posts];
}