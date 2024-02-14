'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { logout } from '../../utils/firebaseMethods';
import Image from 'next/image';

export const Navbar = ({ transparent }) => {
  const [showMe, setShowMe] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [dropdownOn, setDropdownOn] = useState(false);
  const [data, setData] = useState({});

  const toggle = () => {
    setShowMe(!showMe);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        setIsLogin(true);
        setData(currentUser.providerData[0]);
      } else {
        setIsLogin(false);
        return;
      }
    });
  }, []);

  const myLoader = ({ src }) => {
    return `${data.photoURL
      ? data.photoURL
      : 'https://res.cloudinary.com/dppjj5yox/image/upload/v1707721410/acehub/images/default_yetsex.jpg'
      }`;
  };

  return (
    <div>
      <nav className={`w-full ${transparent ? 'bg-transparent' : 'bg-gray-900'} navbar z-50 flex  justify-between items-center w-full py-5 px-10 sm:py-6 `}>
        <div className="md:hidden z-50">
          <button
            style={{ display: showMe ? 'none' : 'block' }}
            title="Toggle Menu"
            onClick={toggle}
            className="text-white"
          >
            <GiHamburgerMenu size={25} />
          </button>
        </div>
        <div className="logo flex-1 hidden md:block text-xl sm:text-3xl text-yellow-300 font-bold">
          Ace-Enterprises
        </div>
        <div
          className={`hidden flex-1 md:flex text-xl justify-around text-white font-bold ${transparent ? 'bg-gray-900 rounded-3xl p-2  ' : 'bg-transparent'
            }`}
        >
          <Link
            href="/"
            className={`${transparent
              ? 'hover:bg-gray-700  px-2 rounded-3xl focus:opacity-70'
              : 'hover:border-white border-b-2 border-transparent'
              }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`${transparent
              ? 'hover:bg-gray-700 px-2 rounded-3xl focus:opacity-70'
              : 'hover:border-white border-b-2 border-transparent'
              }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`${transparent
              ? 'hover:bg-gray-700 px-2 rounded-3xl focus:opacity-70'
              : 'hover:border-white border-b-2 border-transparent'
              }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${transparent
              ? 'hover:bg-gray-700 px-2 rounded-3xl focus:opacity-70'
              : 'hover:border-white border-b-2 border-transparent'
              }`}
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-1  justify-end">
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
                  src={`${data.photoURL
                    ? data.photoURL
                    : 'https://res.cloudinary.com/dppjj5yox/image/upload/v1707721410/acehub/images/default_yetsex.jpg'
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
            <div className="flex gap-2">
              <Link
                href="/login"
                  className={`flex  bg-black border-2 ${transparent ? 'border-black' : 'border-white'}   items-center hover:bg-gray-90 text-white px-4 y-2 rounded-3xl hover:bg-gray-800 sm:text-lg shadow-lg `}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="flex  items-center  border-2   text-white p-2  rounded-3xl hover:border-black hover:bg-gray-800 sm:text-lg shadow-lg "
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>

      <menu
        style={{ display: showMe ? 'flex' : 'none' }}
        className=" bg-gray-900 z-50 text-white overflow-hidden  w-full h-full  pt-7 px-10 fixed left-0 top-0 flex flex-col gap-6 text-lg font-semibold"
      >
        <button
          style={{ display: showMe ? 'block' : 'none' }}
          title="Toggle Menu"
          className="text-white"
          onClick={toggle}
        >
          <CgClose size={25} />
        </button>
        <div className="w-max text-yellow-300 border-yellow-300 border-2 text-xl p-2 ">
          Ace-Enterprises
        </div>
        <Link href="/" className=" border-b-2 border-white  w-max ">
          Home
        </Link>
        <Link href="/projects" className=" border-b-2 border-white  w-max">
          Projects
        </Link>
        <Link href="/about" className="border-b-2 border-white  w-max ">
          About
        </Link>
        <Link href="/contact" className="border-b-2 border-white w-max 0">
          Contact
        </Link>
        <Link href="/faq" className="border-b-2 border-white  w-max ">
          FAQ
        </Link>
      </menu>
    </div>
  );
};
