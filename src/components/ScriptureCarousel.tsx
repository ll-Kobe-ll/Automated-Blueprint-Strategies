'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: '“Look carefully then how you walk, not as unwise but as wise, making the best use of the time, because the days are evil.”',
    ref: 'Ephesians 5:15–16',
  },
  {
    text: '“So teach us to number our days, that we may gain a heart of wisdom.”',
    ref: 'Psalm 90:12',
  },
  {
    text: '“Commit your work to the Lord, and your plans will be established.”',
    ref: 'Proverbs 16:3',
  },
  {
    text: '“Whatever you do, work heartily, as for the Lord and not for men.”',
    ref: 'Colossians 3:23',
  },
  {
    text: '“The hand of the diligent will rule, while the slothful will be put to forced labor.”',
    ref: 'Proverbs 12:24',
  },
];

export default function ScriptureCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // always swipe forward
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-8 text-center overflow-hidden">
      <h3 className="text-2xl font-semibold mb-8">Time Is Sacred, Use It Wisely...</h3>
      <div className="relative w-full max-w-3xl h-[80px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -300, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute w-full text-lg text-gray-700 italic px-4"
          >
            <p className="mb-4">“{quotes[index].text}”</p>
            <p className="not-italic text-sm font-medium text-gray-600">— {quotes[index].ref}</p>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  );
}
