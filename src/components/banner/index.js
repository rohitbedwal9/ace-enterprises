import { Navbar } from "../navbar";
import Image from "next/image";
import { Statics } from "../statics";

export const Banner = () => {
  return (
    <div className="w-full md:h-screen gap-2 bg-white">
      <div className=" bg-yellow-300 text-black h-[70%] flex flex-col  ">
        <Navbar />
        <div className="content ml-20 md:ml-40 mb-20  mt-20 md:mt-24 flex flex-col gap-5 justify-center items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  flex flex-col gap-2 justify-center items-start">
            <span>Building Dreams</span> <span className="">Into Reality</span>
          </h1>
          <div className="flex gap-2">
            <button className="bg-black hover:bg-gray-900 text-white font-bold px-5 py-3 rounded-3xl flex gap-2 items-start">
              <span>Register</span>
            </button>
            <button className="bg-transparent border-2 text-black border-black hover:text-white hover:bg-gray-900  font-bold px-5 py-3 rounded-3xl flex gap-2 items-center">
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
      <div className="image flex md:absolute relative bottom-10 md:top-48 md:right-16 justify-center md:justify-end w-full">
        <Image
          src="/images/construction-worker.jpg"
          className=" w-[250px] h-[300px] rounded-xl md:w-[400px] md:h-[500px] "
          width={400}
          height={500}
          alt="Banner"
        />
      </div>
    </div>
  );
};
