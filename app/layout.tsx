import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://siwd-foundation.vercel.app'),
  title:
    'Supporting Individuals With Disabilities Foundation | 501(c)(3) Nonprofit | Fernandina Beach FL',
  description:
    'A 501(c)(3) nonprofit creating accessible opportunities, education, and community for individuals with disabilities across Northeast Florida. Founded 2020 in Fernandina Beach.',
  icons: { icon: '/images/logo-siwd.png' },
  openGraph: {
    title: 'Supporting Individuals With Disabilities Foundation',
    description:
      'A 501(c)(3) nonprofit creating accessible opportunities, education, and community for individuals with disabilities across Northeast Florida.',
    images: ['/images/idf-community.jpg'],
    type: 'website',
  },
};

export const viewport = { themeColor: '#1C2D5A' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
