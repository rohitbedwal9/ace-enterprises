import { Navbar } from "../navbar";
import Image from "next/image";


export const Banner = () => {
    return (
    <div className="bg-[url('/images/construction-background.jpeg')] backdrop-blur-sm bg-cover bg-no-repeat  w-screen ">
            <div className="backdrop-blur-md w-full  flex flex-col gap-12">
                <Navbar />
                <div className="banner flex flex-col-reverse md:flex-row items-center sm:justify-center my-12 pb-10 gap-10 md:gap-28  ">
                    <div className="content  flex flex-col gap-5 justify-center items-center md:items-start">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex flex-col gap-2 justify-center items-center md:items-start"><span ><span className="text-yellow-500">Building </span><span className="">Dreams</span></span> <span className="">Into <span className="text-yellow-500">Reality</span></span></h1>
                        <div className=""><button className="bg-yellow-500 text-black font-bold px-5 py-3 rounded-lg flex gap-2 items-center"><span>Get Started</span></button></div>
                    </div>
                    <div className="image justify-center items-center">
                        <Image src="/images/Vector-Construction.jpg" className="rounded-2xl w-[300px] h-[300px]  md:w-[420px] md:h-[420px]" width={420} height={420} alt="Banner" />
                    </div>
                </div>
            </div>
    </div>
    );
}