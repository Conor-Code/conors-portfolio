import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsletterDir = path.join(process.cwd(), 'content', 'newsletter');

export function getAllPosts() {
  if (!fs.existsSync(newsletterDir)) return [];

  const files = fs.readdirSync(newsletterDir).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(newsletterDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filePath = path.join(newsletterDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    summary: data.summary || '',
    content,
  };
}

export function getPostsByMonth() {
  const posts = getAllPosts();
  const grouped = {};

  posts.forEach((post) => {
    if (!post.date) return;
    const d = new Date(post.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const label = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    if (!grouped[key]) {
      grouped[key] = { label, count: 0 };
    }
    grouped[key].count++;
  });

  // Sort by key descending (newest first)
  return Object.entries(grouped)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, val]) => ({ key, ...val }));
}

export function getAllSlugs() {
  if (!fs.existsSync(newsletterDir)) return [];

  return fs
    .readdirSync(newsletterDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''));
}