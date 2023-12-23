import { Inter } from 'next/font/google';
import './globals.scss';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
