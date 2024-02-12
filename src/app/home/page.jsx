import {
  Banner,
  Statics,
  About,
  Projects,
  Services,
  Contact,
  Footer,
  Testimonials,
} from '@/components';
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Banner />
      <Statics />
      <About/>
      <Services />
      <Projects />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
