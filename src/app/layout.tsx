import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Digital Haal Khata',
  description:
    'On the first day of the Bengali year, traders close old ledgers and open a new ledger for the new year.[3][4] Customers are invited to settle old debts and start fresh.[5] On this day, Muslim businessmen start anew by writing "Bismillah" or "Elahi Bharsa" in their new account books and marks the event by Haal Khata dawat.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
