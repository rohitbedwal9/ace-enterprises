import {  Banner ,Projects, Services, Contact, Footer, Statics} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center  ">
      <Banner />
      <Statics />
      <Projects />
      <Services />
      <Contact/>
      <Footer />
    </main>
  );
}
