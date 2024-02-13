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

      <Banner />
      <div className='cursor-pointer  -z-1 w-full h-screen text-xl absolute  flex justify-end items-end mr-10 p-10  '>
        <div onClick={scrollToTop} className='p-5 fixed bg-white delay-50 transition hover:bg-black hover:text-white rounded-full'>
          <GrLinkTop size={30} />
        </div>
      </div>
      <Statics />
      <Services />
      <Projects />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
