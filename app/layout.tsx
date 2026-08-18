import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { EasterEggProvider } from '@/components/site/EasterEgg';
import ChatWidget from '@/components/ChatWidget';
import { SITE } from '@/lib/site';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-manrope', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.siwdinc.info'),
  title: {
    default: 'Supporting Individuals with Disabilities Foundation Inc. | 501(c)(3) Nonprofit',
    template: '%s',
  },
  description:
    'Supporting Individuals with Disabilities Foundation Inc. is a 501(c)(3) nonprofit providing APD Waiver services, caregiver training and community resources in Yulee, FL.',
  icons: { icon: '/images/logo-siwd.png' },
};

export const viewport = { themeColor: '#1e40af' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-white font-sans text-brand-900 antialiased">
        <EasterEggProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </EasterEggProvider>
        <ChatWidget />
      </body>
    </html>
  );
}
