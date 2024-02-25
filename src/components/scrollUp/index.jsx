'use client';
import { useState, useEffect } from 'react';
import { TfiArrowCircleUp } from 'react-icons/tfi';

export const ScrollUp = () => {
  const [scrollVisible, setScrollVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={`animate-bounce fixed bottom-4 right-4 m-10 rounded-full p-5 outline-none transition-opacity duration-200 ${
        scrollVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        onClick={scrollToTop}
        className="md:p-2 fixed bg-black text-yellow-300 delay-50 transition hover:bg-black hover:text-white rounded-full"
      >
        <TfiArrowCircleUp size={40} />
      </div>
    </div>
  );
};
