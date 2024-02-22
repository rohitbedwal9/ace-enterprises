import Link from 'next/link';
import { IoIosSend } from 'react-icons/io';
export const Contact = () => {
  return (
    <div className="contact-section  bg-blue-500 flex justify-between flex-col-reverse  md:flex-row gap-8 items-center px-4 py-10 md:p-28  w-full h-full ">
      <div className="contact-box  mx-4 md:mx-6 flex flex-col gap-2 md:gap-10 items-start w-full h-full">
        <div className=" text-xl md:text-2xl px-2  ml-2  bg-yellow-500 font-bold">
          Contact
        </div>
        <div className="text-white p-2 text-3xl md:text-5xl font-bold uppercase w-[80%]">
          Lets talk about your project
        </div>

        <div className="contact-box flex flex-col self-start justify-start gap-2 md:gap-4 items-start  w-full h-full">
          <div className="text-yellow-300 p-2 text-xl md:text-3xl font-bold">
            Visit Us
          </div>
          <div className="flex flex-col gap-2 text-white p-2  text-lg md:text-xl  w-[80%]">
            <span>
              Bank Colony Gautam Nagar Kashipur-244713 U.S.Nagar (Uttarakhand)
            </span>
            <span>
              <Link href="tel:+918475800044">+918475800044</Link> (O) ,
              <Link href="tel:+919897031600">+918475800044</Link> (M)
            </span>
            <span>
              Email:{' '}
              <Link href="mailto:aceenterprisesksp@gmail.com">
                aceenterprisesksp@gmail.com
              </Link>
            </span>
          </div>
        </div>
        <div className="contact-box flex  justify-center md:justify-start items-center w-full h-full">
          <Link
            href="/contact"
            className="text-yellow-300 p-2 border-2 border-white  hover:border-yellow-300 hover:p-2 flex gap-4 self-center items-center justify-center text-xl md:text-3xl font-bold"
          >
            Get in Touch{' '}
            <span className=" bg-yellow-300 rounded-full p-2 text-black  font-bold text-xl">
              <IoIosSend />
            </span>
          </Link>
        </div>
      </div>
      <div className="image-div   md:mx-10 flex justify-center w-full h-full">
        <div className="w-[250px] md:w-[380px] h-[320px] md:h-[470px] rounded-xl  bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fworker-croped_doggdw.avif?alt=media&token=2f8d23f1-3462-42e4-b9e7-b6c8b9f99b56')] bg-cover  bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
};
