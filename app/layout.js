import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/HeaderWrapper';

export const metadata = {
  title: 'Conor - Developer & Builder',
  description: 'Building tools for devs who ship daily. Creator of The Daily Ship, XRA, and more.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Conor — Developer & Builder',
    description: 'Building tools for devs who ship daily.',
    url: 'https://conor-code.vercel.app',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Conor_Code',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bg-primary">
        <HeaderWrapper />
        <main className="flex-1 relative z-0">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
