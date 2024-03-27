import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/context/providers/Providers';
import styles from './page.module.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Form Stuff',
  description: 'Just doing sweet form things.'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className={styles.main}>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
