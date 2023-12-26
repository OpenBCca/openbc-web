import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenBC',
  description: 'Be a Force for Good in BC!',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
