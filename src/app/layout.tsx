import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Lato } from 'next/font/google';
import React from 'react';
import './globals.scss';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
        </AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}
