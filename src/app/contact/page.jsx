import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Navbar, Footer, ScrollUp } from "@/components";

export default function Contact() {
  return (

    <div className="w-full " id="contact">
      <ScrollUp />
      <div className=" mb-2 "> <span className="backdrop-blur-sm"><Navbar /></span></div>
      <div className='w-[100%] h-full lg:flex justify-center'>
        <div className='relative  lg:w-[40%] lg:h-[820px] h-[300px]  bg-[url("https://images.unsplash.com/  photo-1523966211575-eb4a01e7dd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGFjdCUyMHVzfGVufDB8MXwwfHx8MA%3D%3D")] bg-center bg-cover bg-no-repeat'>
          <div className='w-full  lg:h-[800px]  h-[300px]  bg-gradient-to-b  from-[#243c5a] '>

            <div className=' absolute bottom-20 p-5'>
              <div className='text-xl font-bold  rounded-lg text-white lg:text-black p-2'>
                Ace Enterprises
              </div>
              <p className=' text-sm p-2 lg:text-gray-800 text-white '>
                Structural Civil, Mechanical, Electrical & Sanitary & Work Contractor
                <br /><span className='font-bold pr-1'> Contact Details: </span>+91- 8475800044 (O), +91- 9897031600 (M)
                <br /><span className='font-bold pr-1'> E-mail:</span>aceenterprisesksp@gmail.com<br />
              </p>
            </div>

            <div className=' absolute bottom-0   p-5'>
              <button type="button" className="m-1 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                <FaFacebookF size={25} />
                <span className="sr-only">facebook</span>
              </button>

              <button type="button" className="m-1 text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-pink-600 dark:text-pink-600 dark:hover:text-white dark:focus:ring-pink-600 dark:hover:bg-pink-600">
                <FaInstagram size={25} />
                <span className="sr-only">Instagram</span>
              </button>


              <button type="button" className="m-1 text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500">
                <FaWhatsapp size={25} />
                <span className="sr-only">Icon description</span>
              </button>


            </div>

          </div>
        </div>
        <div className='p-10 bg-white dark:bg-gray-900 shadow-md'>

          <div className=" mx-auto max-w-screen-md flex flex-col justify-center items-center">
            <h2 className="mt-4 mb-8 text-xl sm:text-3xl tracking-tight font-bold text-center text-gray-900 dark:text-white border-b-4 border-yellow-500 w-max">GET IN TOUCH</h2>
            <p className="mb-4 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" className="space-y-5 ">
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-full md:w-1/2 px-3 md:mt-1">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-first-name">
                    First Name<span className='ml-1 text-red-500'>*</span>
                  </label>
                  <input className=" block w-full  text-gray-700 border  rounded py-2 px-3 focus:bg-white " id="grid-first-name" type="text" placeholder="Jane" />
                  {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="w-full md:w-1/2 px-3 md:mt-1 mt-5">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 " for="grid-last-name">
                    Last Name<span className='ml-1 text-red-500'>*</span>
                  </label>
                  <input className="block w-full  text-gray-700 border  rounded py-2 px-3 focus:bg-white" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-last-name">Email<span className='ml-1 text-red-500'>*</span> </label>
                <input className="block w-full  text-gray-700 border  rounded py-2 px-3 focus:bg-white" id="grid-last-name" type="email" placeholder="Name@ace.com" />
              </div>

              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Phone<span className='ml-1 text-red-500'>*</span></label>
                <input type="number" pattern="[0-9]{10}" id="subject" className="block w-full  text-gray-700 border  rounded py-2 px-3 focus:bg-white" placeholder="+91 9999999999" required />
              </div>

              <div>
                <label for="subject" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Subject<span className='ml-1 text-red-500'>*</span></label>
                <input type="text" id="subject" className="block w-full  text-gray-700 border  rounded py-2 px-3 focus:bg-white" placeholder="Let us know how we can help you" required />
              </div>
              <div className="sm:col-span-2">
                <label for="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Your message<span className='ml-1 text-red-500'>*</span></label>
                <textarea id="message" rows="6" className="block w-full  text-gray-700 border  rounded py-2 px-3 focus:bg-white" placeholder="Leave a comment..."></textarea>
              </div>

              <button type="button" className="w-full text-white hover:bg-yellow-600   font-medium text-md sm:text-lg p-2   bg-yellow-500 focus:bg-yellow-600">SEND</button>

            </form>
          </div>
        </div>

      </div >
      <Footer />
    </div>
  )
}