import { Navbar, Projects, Services, Footer } from "@/components";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Navbar />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}
