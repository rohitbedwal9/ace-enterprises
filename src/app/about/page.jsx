import Image from "next/image";
import aboutImage from "../../../public/images/about.jpeg";
import { Navbar } from "@/components";
import { Footer } from "@/components";

export default function About() {
  return (
    <>
      <head>
        <title>About Us page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
          `}
        </style>
      </head>
      <body className="font-poppins">
        <Navbar />
        <section className="flex flex-col md:flex-row justify-center items-center md:items-start px-4 md:px-12 py-8 md:py-20">
          <div className="about-left md:pr-12 md:w-5/12 order-2 md:order-1">
            <Image
              src={aboutImage}
              alt="About Img"
              width={420}
              height={280}
              className="rounded-md"
            />
          </div>

          <div className="about-right w-full md:w-7/12 md:pr-8 lg:pr-48 order-1 md:order-2 m-10">
            <h1 className=" underline	decoration-yellow-500  underline-offset-[15px] text-4xl mb-4 md:mb-2 font-semibold">ABOUT US</h1>
            <p className="text-gray-500 text-base mt-6">
              Welcome to Ace Enterprises, a distinguished civil construction
              company that has been setting the standard since 2012. Renowned
              for our unwavering commitment to innovation and quality, we have
              left an indelible mark on numerous government projects, proudly
              collaborating with both the Central and Uttarakhand Government. At
              Ace Enterprises, we specialize not only in public infrastructure
              but also in private construction, where we bring our expertise to
              craft cutting-edge schools and hospitals. Our passion lies in
              shaping a future defined by excellence and unparalleled quality.
              Join us on this journey at Ace Enterprises, where every project
              is not just a construction endeavor but a meticulously crafted
              masterpiece in the making.
            </p>
          </div>
        </section>

        <Footer />
      </body>
    </>
  );
}