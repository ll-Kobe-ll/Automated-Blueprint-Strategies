import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Automated Blueprint Strategies',
  description: 'Grow your business on autopilot with high-end automated AI receptionist systems.',
  icons: {
    icon: '/ABSiconWhite.png',
    shortcut: '/ABSiconWhite.png',
    apple: '/ABSiconWhite.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0f172a] flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
