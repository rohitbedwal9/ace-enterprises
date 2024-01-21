import Image from "next/image";
import { Navbar } from "@/components";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Navbar/>
      <Projects/>
    </main>
  );
}
