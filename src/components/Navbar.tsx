'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    // Only run scroll tracking after hydration is done
    setMounted(true);

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (Math.abs(diff) > 10 && currentScrollY > 100) {
        setVisible(diff < 0); // hide on scroll down, show on scroll up
      } else if (currentScrollY <= 100) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      const timeout = setTimeout(() => {
        if (currentScrollY < lastScrollY) setVisible(true);
      }, 150);
      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, scrollTimeout]);

  // 🧩 Fix hydration mismatch: render static version before mount
  if (!mounted) {
    return (
      <header className="backdrop-blur-md bg-white shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <Image
              src="/ABS.png"
              alt="Automated Blueprint Strategies"
              width={140}
              height={50}
              className="h-auto"
              priority
            />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`backdrop-blur-md bg-white shadow-sm sticky top-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
          {/* Desktop / Tablet Logo */}
          <Image
            src="/ABS.png"
            alt="Automated Blueprint Strategies"
            width={140}
            height={50}
            className="h-auto hidden sm:block"
            priority
          />

          {/* Mobile Logo */}
          <Image
            src="/ABSWhite.png"
            alt="Automated Blueprint Strategies (white)"
            width={140}
            height={50}
            className="h-auto block sm:hidden"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[#0f172a] font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
          <Link href="/faqs" className="hover:text-blue-600 transition">FAQ</Link>
          <Link
            href="/contact"
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Plan
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-[#0f172a] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t shadow-md px-4 py-4 flex flex-col space-y-4 text-[#0f172a] font-medium`}
      >
        <Link href="/" onClick={closeMenu} className="hover:text-blue-600">Home</Link>
        <Link href="/pricing" onClick={closeMenu} className="hover:text-blue-600">Pricing</Link>
        <Link href="/faqs" onClick={closeMenu} className="hover:text-blue-600">FAQs</Link>
        <Link
          href="/#form"
          onClick={closeMenu}
          className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          Get Plan
        </Link>
      </div>
    </header>
  );
}
