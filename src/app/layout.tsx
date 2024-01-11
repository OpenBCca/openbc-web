import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { Inter } from 'next/font/google';
import './globals.scss';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
        </AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}
