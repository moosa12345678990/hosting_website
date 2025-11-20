// app/layout.js
import './globals.css';
import { Header } from './layouts/header/header';
import { HeaderMessage } from './layouts/header/message';
import { Outfit, Inter } from 'next/font/google';

// Define fonts
export const outfit500 = Outfit({
  weight: '500',       // Medium
  style: 'normal',     // regular style
  subsets: ['latin'],  // include your character sets
});
const inter400 = Inter({ weight: '400', style: 'normal', subsets: ['latin'] });

export const metadata = {
  title: 'CloudX Hosting',
  description: 'Get your Hosting Quickly',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={`${outfit500.className} ${inter400.className}`}>
      <body className="bg-[var(--color-main-bg)] text-[var(--color-primary)] antialiased">
        <HeaderMessage />
        <Header />
        {children}
      </body>
    </html>
  );
}
