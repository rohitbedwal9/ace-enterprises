import { Navbar, Banner ,Projects, Services, Contact, Footer} from "@/components";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Banner />
      <Projects />
      <Services />
      <Contact/>
      <Footer />
    </main>
  );
}
