import Link from 'next/link';
import Image from 'next/image';
const clientData = [
  {
    id: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2FBinaryBridge_yj2avc.png?alt=media&token=0143e0a0-d960-4b89-8d47-9e4558882599',
    link: '/home',
  },
  {
    id: 2,
    img: 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2FBinaryBridge_yj2avc.png?alt=media&token=0143e0a0-d960-4b89-8d47-9e4558882599',
    link: '/home',
  },
  {
    id: 3,
    img: 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2FBinaryBridge_yj2avc.png?alt=media&token=0143e0a0-d960-4b89-8d47-9e4558882599',
    link: '/home',
  },
  {
    id: 4,
    img: 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2FBinaryBridge_yj2avc.png?alt=media&token=0143e0a0-d960-4b89-8d47-9e4558882599',
    link: '/home',
  },
  {
    id: 5,
    img: 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2FBinaryBridge_yj2avc.png?alt=media&token=0143e0a0-d960-4b89-8d47-9e4558882599',
    link: '/home',
  },
  {
    id: 6,
    img: 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2FBinaryBridge_yj2avc.png?alt=media&token=0143e0a0-d960-4b89-8d47-9e4558882599',
    link: '/home',
  },
  {
    id: 7,
    img: 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2FBinaryBridge_yj2avc.png?alt=media&token=0143e0a0-d960-4b89-8d47-9e4558882599',
    link: '/home',
  },
];
export const Testimonials = () => {
  return (
    <div className="flex w-full flex-col justify-start items-start  px-6 md:px-40 gap-4 py-20">
      <div data-aos="fade-in" className="text-xl font-semibold">What Our Client Says</div>
      <h1 className="text-2xl bg-yellow-300  py-2 px-4 font-bold">
        Testimonials
      </h1>
      <div data-aos="fade-in" className="flex flex-col md:flex-row gap-10 items-center mx-2 md:mx-0 mt-8 ">
        <div className="flex flex-col gap-4 bg-white  p-4 rounded-xl shadow-xl w-30%">
          <div className="text-md md:text-lg font-semibold break-words ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pellentesque, nunc ut elementum ultrices, nunc magna lacinia nunc,
            vitae pellentesque nunc nunc nec justo. Nunc pellentesque, nunc ut
            elementum ultrices, nunc magna lacinia nunc, vitae pellentesque nunc
            nunc nec justo.
          </div>
          <div data-aos="fade-in" className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fworker-croped_doggdw.jpg?alt=media&token=29aa2c9b-173d-45b4-87f3-c87a8ae59aa9')] bg-cover bg-no-repeat bg-center"></div>
            <div className="flex flex-col gap-2">
              <div className="text-lg md:text-2xl font-semibold md:font-bold">
                John Doe
              </div>
              <div className="text-sm md:text-lg font-semibold">
                CEO, Company
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-xl gap-4 w-30%">
          <div className="text-md md:text-lg font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pellentesque, nunc ut elementum ultrices, nunc magna lacinia nunc,
            vitae pellentesque nunc nunc nec justo. Nunc pellentesque, nunc ut
            elementum ultrices, nunc magna lacinia nunc, vitae pellentesque nunc
            nunc nec justo.
          </div>
          <div data-aos="fade-in" className="flex gap-4 items-center">
            <div className="w-20 h-20 rounded-full bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fworker-croped_doggdw.jpg?alt=media&token=29aa2c9b-173d-45b4-87f3-c87a8ae59aa9')] bg-cover bg-no-repeat bg-center"></div>
            <div className="flex flex-col gap-2">
              <div className="text-lg md:text-2xl font-semibold md:font-bold">
                John Doe
              </div>
              <div className="text-sm md:text-lg font-semibold">
                CEO, Company
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-in" className="flex flex-col bg-white p-4 rounded-xl shadow-xl gap-4 w-30%">
          <div className="text-md md:text-lg font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pellentesque, nunc ut elementum ultrices, nunc magna lacinia nunc,
            vitae pellentesque nunc nunc nec justo. Nunc pellentesque, nunc ut
            elementum ultrices, nunc magna lacinia nunc, vitae pellentesque nunc
            nunc nec justo.
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 rounded-full bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fworker-croped_doggdw.jpg?alt=media&token=29aa2c9b-173d-45b4-87f3-c87a8ae59aa9')] bg-cover bg-no-repeat bg-center"></div>
            <div className="flex flex-col gap-2">
              <div className="text-lg md:text-2xl font-semibold md:font-bold">
                John Doe
              </div>
              <div className="text-sm md:text-lg font-semibold">
                CEO, Company
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="my-10 text-xl font-semibold">
        Our Clients / Partners / Certificates
      </h1>
      <div className="flex flex-wrap md:flex-nowrap md:flex-row gap-10 px-2 justify-center bg-white shadow-xl rounded-xl items-center w-full p-10 md:p-5">
        {clientData.map((client) => (
          <Link
            href={client.link}
            key={client.id}
            className="cursor-pointer flex justify-center border-black border-2 rounded-xl items-center"
          >
            <Image
              className="object-cover rounded-xl bg-white w-full h-[80%]"
              src={client.img}
              alt={client.id}
              width={100}
              height={100}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
