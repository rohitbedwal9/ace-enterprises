'use client';
import {Banner,Statics,About,Projects,Services,Contact,Footer,Testimonials,ScrollUp} from '@/components';
export default function Home() {
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
