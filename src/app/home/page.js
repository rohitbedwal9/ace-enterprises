import { Banner, Statics, Projects, Services, Contact, Footer} from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Banner />
      <Statics />
      <Services />
      <Projects />
      <Contact/>
      <Footer />
    </main>
  );
}
