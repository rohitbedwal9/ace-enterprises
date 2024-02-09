import {
  Banner,
  Statics,
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
      <Services />
      <Projects />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
