'use client';
import { Banner, Statics, About, Projects, Services, Contact, Footer, Testimonials, ScrollUp } from '@/components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      duration: 800, // values from 0 to 3000, with step 50ms
    });
  }, [])

 
  return (
    <main className="flex relative flex-col items-center">
      <Banner />
      <ScrollUp />
      <Statics />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
