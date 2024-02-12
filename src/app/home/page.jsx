'use client';
import {
  Banner,
  Statics,
  Projects,
  Services,
  Contact,
  Footer,
  Testimonials,
} from '@/components';
import { GrLinkTop } from "react-icons/gr";

export default function Home() {

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <main className="flex relative flex-col items-center">
      <div className=' w-full h-screen text-xl fixed z-50 flex justify-end items-end mr-10 p-10  '>
        <div className='p-5 bg-white delay-50 transition hover:bg-black hover:text-white rounded-full'>
          <GrLinkTop  size={30} onClick={scrollToTop} />
        </div>
      </div>
      <Banner />
      <Statics />
      <Services />
      <Projects />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
