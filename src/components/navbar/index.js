'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { logout } from '../../utils/firebaseMethods';
import Image from 'next/image';

export const Navbar = () => {
  const [showMe, setShowMe] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [dropdownOn, setDropdownOn] = useState(false);
  const [data, setData] = useState({});

  const toggle = () => {
    setShowMe(!showMe);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsLogin(true);
        setData(currentUser.providerData[0]);
      } else {
        setIsLogin(false);
        return;
      }
    });
  }, []);

  const myLoader = ({ src }) => {
    return `${data.photoURL ? data.photoURL : '/images/default.jpg'}`;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="navbar flex bg-transparent justify-between items-center w-full pt-5 px-10 sm:py-6  ">
        <div className="md:hidden">
          <button
            style={{ display: showMe ? 'none' : 'block' }}
            title="Toggle Menu"
            onClick={toggle}
          >
            <GiHamburgerMenu size={25} />
          </button>
          <button
            style={{ display: showMe ? 'block' : 'none' }}
            title="Toggle Menu"
            onClick={toggle}
          >
            <CgClose size={25} />
          </button>
        </div>
        <div className="logo flex flex-1 hidden md:block text-xl sm:text-3xl text-yellow-300 font-bold select-none">
          Ace-Enterprises
        </div>
        <div className="hidden flex flex-1 md:flex text-lg justify-between bg-gray-900 p-2 rounded-3xl text-white">
          <Link
            href="/"
            className="  hover:bg-gray-400 font-semibold px-2 rounded-3xl focus:opacity-70"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="  hover:bg-gray-400 font-semibold px-2 rounded-3xl focus:opacity-70"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="  hover:bg-gray-400 px-2 font-semibold rounded-3xl focus:opacity-70"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="  hover:bg-gray-400 px-2 font-semibold rounded-3xl focus:opacity-70"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="  hover:bg-gray-400 px-2  font-semibold rounded-3xl focus:opacity-70"
          >
            FAQ
          </Link>
        </div>
        <div className='flex flex-1 justify-end'>
          {isLogin ? (
            <div className=" rounded-md">
              <div className="relative">
                <Image
                  onClick={() => setDropdownOn(!dropdownOn)}
                  type="button"
                  width={40}
                  height={40}
                  alt="Profile Picture"
                  loader={myLoader}
                  src={`${
                    data.photoURL ? data.photoURL : '/images/default.jpg'
                  }`}
                  className="rounded-full"
                />

                <div
                  style={{ display: dropdownOn ? 'block' : 'none' }}
                  className="absolute right-0 z-10  mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg"
                >
                  <div className="p-2">
                    <div className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">
                      {data.email}
                    </div>

                    <div
                      onClick={logout}
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      Logout

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/signup">
              <button className="flex  items-center border-2 border-black  hover:bg-gray-900 hover:text-white p-2 rounded-3xl font-semibold sm:text-lg shadow-lg ">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>

      <div
        style={{ display: showMe ? 'block' : 'none' }}
        className="bg-gray-900 text-white w-max  rounded-xl p-10 z-10 fixed top-20 left-1"
      >
        <div className="flex flex-col gap-6 text-lg font-semibold">
          <div className="w-max  text-xl  text-yellow-300">Ace-Enterprises</div>
          <Link
            href="/"
            className=" border-b-2 border-white  w-max hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className=" border-b-2 border-white  w-max hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="border-b-2 border-white  w-max hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="border-b-2 border-white  w-max hover:text-gray-300"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="border-b-2 border-white  w-max hover:text-gray-300"
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};
