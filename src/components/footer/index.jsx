import Link from 'next/link';
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiFacebookCircleFill,
} from 'react-icons/ri';
import { IoMdSend } from 'react-icons/io';

export const Footer = () => {
  return (
    <main className="pt-4 sm:pt-14 h-50 bg-gray-900 text-white shadow-lg w-full flex flex-col gap-2 sm:gap-0 pb-10">
      <div className="flex flex-col sm:flex-row sm:justify-evenly gap-6 px-10 sm:0">
        <div className="flex flex-col justify-center gap-2 self-start ">
          <div className="logo text-2xl sm:text-3xl font-semibold text-yellow-500">
            Ace-Enterprises
          </div>
          <div className="address sm:text-md md:w-[16em]">
            Bank Colony Gautam Nagar Kashipur-244713 U.S.Nagar (Uttarakhand)
          </div>
          <div className="flex flex-col contact sm:text-md w-[12em]">
            <span>Contact Details : </span>
            <Link href="tel:+918475800044">+918475800044 (O)</Link>
            <Link href="tel:+919897031600">+919897031600 (M)</Link>
          </div>
        </div>
        <div className="flex md:w-[20%] w-[80%] justify-between ">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-yellow-500">
              Menu
            </div>
            <div className="flex flex-col mt-2 gap-2">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-yellow-500">
              Projects
            </div>
            <div className="flex flex-col mt-2 gap-2">
              <Link href="/projects">Project 1</Link>
              <Link href="/projects">Project 2</Link>
              <Link href="/projects">Project 3</Link>
              <Link href="/projects">Project 4</Link>
              <Link href="/projects">Project 5</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold text-yellow-500">
            Get Updates
          </div>
          <form className="flex mt-4 bg-white gap-1 px-2 rounded-md ">
            <input
              type="mail"
              placeholder="Enter your email"
              className="text-black outline-none h-4 border-0"
            />
            <button type="submit" className=" text-black rounded-md  ">
              <IoMdSend />
            </button>
          </form>
          <div className="mt-4">
            E-mail:{' '}
            <Link href="mailto:aceenterprisesksp@gmail.com">
              aceenterprisesksp@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:mx-44 p-4 mt-6 text-sm sm:text-md border-t-2 border-white  border-dotted ">
        <span>© 2024 Ace-Enterprises</span>
        <span className="">Privacy Policy</span>
      </div>
    </main>
  );
};
