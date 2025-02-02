import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/context/providers/Providers';
import './globals.css';
import Navigation from '@/components/Navigation/Navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Container } from '@mui/material';
import { Suspense } from 'react';
import Loading from './loading';

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
        <AppRouterCacheProvider>
          <Providers>
            <Navigation />
            <Container sx={{ height: '100vh' }}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Container>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
