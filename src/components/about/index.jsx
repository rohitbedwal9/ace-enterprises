import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="container mt-10 py-10 px-10  md:px-20 ">
      <h1 data-aos="fade-in"  className="text-xl md:text-3xl font-bold  text-black w-max text-center">
        About Company
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div data-aos="zoom-out-up" className="description md:w-[60%] text-sm md:text-lg mt-6">
          <p>
            Welcome to Ace Enterprises, a distinguished civil construction
            company that has been setting the standard since 2012. Renowned for
            our unwavering commitment to innovation and quality, we have left an
            indelible mark on numerous government projects, proudly
            collaborating with both the Central and Uttarakhand Government. At
            Ace Enterprises, we specialize not only in public infrastructure but
            also in private construction, where we bring our expertise to craft
            cutting-edge schools and hospitals. Our passion lies in shaping a
            future defined by excellence and unparalleled quality. Join us on
            this journey at Ace Enterprises, where every project is not just a
            construction endeavor but a meticulously crafted masterpiece in the
            making.
          </p>
          <Link
            href="/about"
            className="text-blue-500 flex gap-1 pt-2 items-center"
          >
            Read More <FaArrowRight />
          </Link>
        </div>
        <div data-aos="zoom-out-up" className="mt-10 md:mt-0 w-[80%] md:w-[30%] h-[280px]  md:h-[380px] rounded-xl shadow-xl bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fworker-croped_doggdw.avif?alt=media&token=2f8d23f1-3462-42e4-b9e7-b6c8b9f99b56')] bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};
