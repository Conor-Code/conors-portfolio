import './globals.css';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/HeaderWrapper';

export const metadata = {
  title: 'Conor - Developer & Builder',
  description: 'Building tools for devs who ship daily. Creator of The Daily Ship, XRA, and more.',
  openGraph: {
    title: 'Conor — Developer & Builder',
    description: 'Building tools for devs who ship daily.',
    url: 'https://conor-code.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Conor_Code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bg-primary">
        <HeaderWrapper />
        <main className="flex-1 relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
