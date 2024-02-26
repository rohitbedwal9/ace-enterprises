import Image from 'next/image';
import { Navbar,Footer, ScrollUp } from '@/components';
import { IoIosCall, IoLogoLinkedin, IoIosMail } from 'react-icons/io';

const people = [
  {
    id: 1,
    name: 'Jane Cooper',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fabout_zgcfnv.jpg?alt=media&token=6a37d7ed-167d-4a81-85dd-3ee5e0ce6a96',
    department: 'Ace Enterprises',
    role: 'Founder',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa exercitationem ex cupiditate sit assumenda dolor culpasequi, suscipit ipsum minus tenetur quibusdam in eum aut nesciunt a reprehenderit doloremque labore porro iure, dolore nulla!',
  },
  {
    id: 2,
    name: 'John Doe',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fabout_zgcfnv.jpg?alt=media&token=6a37d7ed-167d-4a81-85dd-3ee5e0ce6a96',
    department: 'Ace Enterprises',
    role: 'Co-Founder',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa exercitationem ex cupiditate sit assumenda dolor culpasequi, suscipit ipsum minus tenetur quibusdam in eum aut nesciunt a reprehenderit doloremque labore porro iure, dolore nulla!',
  },
  {
    id: 3,
    name: 'Veronica Lodge',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fabout_zgcfnv.jpg?alt=media&token=6a37d7ed-167d-4a81-85dd-3ee5e0ce6a96',
    department: 'Ace Enterprises',
    role: 'Co-Founder',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa exercitationem ex cupiditate sit assumenda dolor culpasequi, suscipit ipsum minus tenetur quibusdam in eum aut nesciunt a reprehenderit doloremque labore porro iure, dolore nulla!',
  },
];
export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollUp />
      <div className="banner bg-white  h-full bg-no-repeat mx-auto  flex flex-col items-center  shadow-xl ">
        <div data-aos="fade-in" className=" pb-10 ">
          <h1  className=" text-2xl sm:text-3xl md:text-4xl font-semibold  text-black w-max mx-auto my-16 ">
            About
          </h1>
          <div data-aos="fade-in"  className="flex flex-col  md:flex-row md:px-20 justify-between items-center gap-10">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fscott-blake-x-ghf9LjrVg-unsplash_i6ff6c.jpg?alt=media&token=17ccffb7-53c7-43ea-931f-5c3d3aabb5d7"
              width={300}
              height={300}
              alt="image"
              className="h-[100%] w-[90%] md:w-[40%] rounded-xl gap-10"
            />
            <div data-aos="fade-in"  className="flex flex-col  w-[90%] md:w-[50%] mx-0 md:mx-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Ace Enterprises
              </h1>
              <div className="text-gray-500 text-base sm:text-lg px-auto mt-6">
                Welcome to Ace Enterprises, a distinguished civil construction
                company that has been setting the standard since 2012. Renowned
                for our unwavering commitment to innovation and quality, we have
                left an indelible mark on numerous government projects, proudly
                collaborating with both the Central and Uttarakhand Government.
                At Ace Enterprises, we specialize not only in public
                infrastructure but also in private construction, where we bring
                our expertise to craft cutting-edge schools and hospitals. Our
                passion lies in shaping a future defined by excellence and
                unparalleled quality. Join us on this journey at Ace
                Enterprises, where every project is not just a construction
                endeavor but a meticulously crafted masterpiece in the making.
              </div>
            </div>
          </div>
          <div className="border-t-2 border-dashed border-blue-300 pt-6 text-gray-500  text-base sm:text-lg mx-auto mt-6 w-[90%] md:w-[80%]">
          Step into a realm where craftsmanship meets ingenuity, where each brick laid is a testament to our dedication. At Ace Enterprises, we don&apos;t just build structures; we weave dreams into reality. With a legacy steeped in tradition and a vision set on the horizon, we invite you to embark on a journey where every corner holds the promise of brilliance. Join us, and together, let&apos;s build a future where excellence knows no bounds.
          </div>
        </div>
      </div>

      <div data-aos="fade-in"  className="flex flex-col justify-center items-center my-10">
          <h1 className="my-10 text-2xl sm:text-3xl md:text-4xl font-semibold">
            Founder
          </h1>
          <div className="flex flex-col md:flex-row items-center w-full md:px-10 ">
          <div data-aos="fade-in"  className="flex flex-col  w-[90%] md:w-[40%] gap-2 items-center">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fabout_zgcfnv.jpg?alt=media&token=6a37d7ed-167d-4a81-85dd-3ee5e0ce6a96"
                alt="image"
                width={300}
                height={300}
                className="rounded-xl "
              />
              <div className="text-xl font-semibold">Mohammad Furqan</div>
              <div className="text-gray-500 text-base">
                Founder, Ace Enterprises
              </div>
            </div>
          <div data-aos="fade-in" className="description text-gray-500 text-base  md:px-20 w-[90%] md:w-[60%] flex flex-col items-center mt-4 md:mt-0 ">
            In the auspicious year of 2012, against the backdrop of a burgeoning industry, Mohammad Furqan embarked on a bold odyssey, sowing the seeds of Ace Enterprises with a profound vision for revolutionizing the landscape of civil construction. With an unwavering resolve and a fervent dedication to excellence, he meticulously nurtured Ace Enterprises, cultivating a culture steeped in innovation, integrity, and relentless pursuit of perfection. Mohammad Furqan&apos;s visionary leadership has not only propelled Ace Enterprises to the vanguard of the industry but has also transformed it into a veritable powerhouse of ingenuity and craftsmanship. Each project undertaken under his stewardship bears the hallmarks of his discerning eye and unwavering commitment to quality, earning accolades and admiration from peers and clients alike. As the custodian of Ace Enterprises illustrious legacy, Mohammad Furqan continues to chart a course towards new horizons of success, where the company&apos;s name becomes synonymous with unparalleled achievement and its contributions resonate as enduring testaments to the indomitable spirit of human endeavor.
            </div>
          </div>
         
          <h1 className="my-10 text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our Team
          </h1>
          <div className="flex flex-wrap flex-row justify-around items-center w-full px-10">
            {people.map((people) => (
              <div
                key={people.id}
                data-aos="fade-in"
                className="mt-10 shadow-xl flex flex-col items-center gap-5 bg-white rounded-xl p-4 md:w-[29%]"
              >
                <Image
                  src={people.image}
                  width={200}
                  height={200}
                  alt="image"
                  className="rounded-full"
                />
                <div className="text-xl font-semibold">{people.name}</div>
                <div className="text-gray-500 text-base">
                  {people.role}, {people.department}
                </div>
                <div className="text-gray-500 text-base">
                  {people.description}
                </div>
              </div>
            ))}
          </div>
        </div>
    
      <Footer />
    </div>
  );
}
