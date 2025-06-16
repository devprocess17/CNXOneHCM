import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CNXOne HCM',
  description: 'CNXOne HCM®, la solution de gestion du Capital Humain, 100 % gabonaise.',
  icons: {
    icon: '/images/img_title.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
