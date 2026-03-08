export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://conor-code.vercel.app/sitemap.xml',
  };
}