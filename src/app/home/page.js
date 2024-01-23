import { Navbar, Projects, Services, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Navbar />
      <Projects />
      <Services />
      <Contact/>
      <Footer />
    </main>
  );
}
