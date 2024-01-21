import Image from "next/image";
import { Navbar } from "@/components";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Navbar />
      <Projects />
      <Services />
    </main>
  );
}
