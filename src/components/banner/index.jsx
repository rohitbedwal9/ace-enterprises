import { Navbar } from '../navbar';
import Link from 'next/link';
export const Banner = () => {
  return (
    <div className="w-full h-screen  bg-[url('https://res.cloudinary.com/dppjj5yox/image/upload/v1707500791/acehub/images/construction-background2_pnbpfm.jpg')] bg-no-repeat bg-cover bg-center md:bg-top">
      <div className="backdrop-blur-md h-full">
        <Navbar transparent={true} />
        <div className="w-full  flex flex-col-reverse gap-10 md:gap-20  justify-center items-center md:flex-row h-[70%] md:h-[90%]">
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
          <div className="image flex bg-[url(https://res.cloudinary.com/dppjj5yox/image/upload/v1707720859/acehub/images/construction-worker_ljtwmm.jpg)] bg-cover bg-no-repeat justify-center md:ml-28  w-[240px] h-[300px] md:w-[400px] md:h-[500px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
