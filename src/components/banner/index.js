import { Navbar } from "../navbar";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen md:h-screen bg-[url('/images/construction-background2.jpeg')] bg-no-repeat bg-cover">
        <div className="backdrop-blur-sm h-full">
          <Navbar />
          <div className="w-full bg-transparent flex flex-col-reverse gap-10 md:gap-20  justify-center items-center md:flex-row h-[90%]">
            <div className="content  md:ml-30 md:mb-20  md:mt-24 flex flex-col gap-6 justify-center items-start">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  flex flex-col gap-2 justify-center items-start">
                <span className="flex gap-2 md:w-max w-full justify-center items-center">
                  <span className="text-yellow-300">Building</span>
                  <span className="text-white"> Dreams</span>
                </span>
                <span className="flex gap-2 w-full md:w-max items-center justify-center">
                  <span className="text-white">Into</span>
                  <span className="text-yellow-300">Reality</span>
                </span>
              </h1>
              <div className="flex gap-2">
                <button className="bg-black hover:bg-gray-800 text-white font-bold px-5 py-3 rounded-3xl flex gap-2 items-start">
                  <span>Register</span>
                </button>
                <button className="bg-transparent border-2 text-black border-black hover:text-white hover:bg-gray-800  font-bold px-5 py-3 rounded-3xl flex gap-2 items-center">
                  <span>Contact</span>
                </button>
              </div>
            </div>
            <div id="wrk" className="image flex  justify-center md:ml-28   w-max">
              <Image
                src="/images/construction-worker.jpg"
                className=" w-[240px] h-[300px] md:w-[400px] md:h-[500px] rounded-lg"
                width={400}
                height={500}
                alt="Banner" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
