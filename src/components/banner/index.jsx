import { Navbar } from '../navbar';
import Link from 'next/link';
import Image from 'next/image';
export const Banner = () => {
  return (
    <div className="w-full h-screen bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fconstruction-background2_pnbpfm.jpg?alt=media&token=10362562-d009-41e0-8033-d03d6287a974')] bg-no-repeat bg-cover bg-center md:bg-top">
      <div className="backdrop-blur-md h-full">
        <Navbar transparent={true} />
        <div className="w-full  flex flex-col-reverse gap-10 md:gap-20  justify-center items-center md:flex-row  h-[90%]">
          <div className="content  md:ml-30 md:mb-20  md:mt-24 flex flex-col gap-6 justify-center items-start">
            <h1 className="text-3xl  sm:text-4xl md:text-6xl font-bold  flex flex-col gap-2 justify-center items-start">
              <span className="flex gap-2  md:w-max w-full justify-center items-center">
                <span className="text-yellow-300">Building</span>
                <span className="text-white"> Dreams</span>
              </span>
              <span className="flex w-max gap-2 self-center md:self-start md:w-max items-center justify-center">
                <span className="text-white">Into</span>
                <span className="text-yellow-300">Reality</span>
              </span>
            </h1>
            <div className="flex gap-2">
              <Link
                href="/signup"
                className="bg-black hover:bg-gray-800 text-white font-bold px-5 py-3 rounded-3xl flex gap-2 items-start"
              >
                Register
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 text-white border-white hover:text-white hover:bg-gray-800 hover:border-black  font-bold px-5 py-3 rounded-3xl flex gap-2 items-center"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="image flex justify-center md:ml-28 ">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fconstruction-worker_ljtwmm.jpg?alt=media&token=e5795f95-7d17-41ba-9090-00653cede111"
              alt="construction worker"
              width={400}
              height={500}
              objectFit="cover"
              loading="lazy"
              className="w-[240px] h-[300px] md:w-[400px] md:h-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
