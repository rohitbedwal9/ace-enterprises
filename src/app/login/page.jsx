'use client';
import { FcGoogle } from 'react-icons/fc';

import { login, google, logout } from '@/utils/firebaseMethods';

import { login, google } from '@/utils/firebaseMethods';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import Link from 'next/link';
import { MiniNav, FormInput } from '@/components';
import { ToastContainer, toast } from 'react-toastify';

const inputs = [
  {
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    required: true,
  },
];

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const notify = (text) => toast.error(text);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
      } else {
        setShow(false);
      }
    });
  }, [auth]);

  const handleGoogle = async () => {
    try {

      let res = await google();
      console.log(res)
      if (res) {
        toast.success('You are successfully logged in');
        router.push('/home');
      }
      else {
        logout()
        notify("User is not registered. Please register the user first.")
      }

      await google();
      toast.success('You are successfully logged in');
      router.push('/home');

    } catch (e) {
      notify(e.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res2 = await login(values);
      toast.success('You are successfully logged in');
      router.push('/home');
    } catch (error) {
      notify(error);
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {show ? (
        ''
      ) : (
        <div className="w-full bg-[url('https://res.cloudinary.com/dppjj5yox/image/upload/v1705992514/acehub/images/temp-bg.jpg')] bg-norepeat bg-cover">
          <div className="w-full h-screen ">
            <div className="backdrop-blur-sm h-full">
              <div className="nav-mini w-full pl-4 md:pl-16 pt-4  md:pt-6">
                <MiniNav />
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <div className="flex flex-col items-center justify-center px-2 py-4 mt-5  mx-auto lg:py-0 w-full">
                <div className="w-full m-10 rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
                  <div className="p-6  sm:px-8">
                    <h1 className="text-center text-2xl md:font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                      Login
                    </h1>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-2"
                    >
                      {inputs.map((input) => (
                        <FormInput
                          key={input.id}
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                          className="p-2 my-0 w-full text-sm"
                        />
                      ))}

                      <div className="m-1 flex justify-end text-yellow-400 hover:text-yellow-500 text-sm">
                        <Link href="forgotpassword">Forgot Password?</Link>
                      </div>
                      <button
                        type="submit"

                        className={`w-full mt-5 text-slate-700  ${loading
                          ? 'bg-yellow-200 '
                          : 'bg-yellow-400 hover:bg-yellow-500 '
                          }  focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center  dark:focus:ring-primary-800`}

                        className={`w-full mt-5 text-slate-700  ${
                          loading
                            ? 'bg-yellow-200 '
                            : 'bg-yellow-400 hover:bg-yellow-500 '
                        }  focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center  dark:focus:ring-primary-800`}

                        disabled={loading ? true : false}
                      >
                        {loading ? 'Logging in...' : 'Login'}
                      </button>

                      <div className="inline-flex items-center justify-center w-full ">
                        <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                        <div className="px-2 text-xs  text-white ">OR</div>
                        <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                      </div>
                    </form>
                    <button
                      onClick={handleGoogle}
                      className=" w-full text-sm  px-5 py-2 bg-white border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                    >
                      <FcGoogle size={20} />
                      <p className="text-gray-500">Continue with Google</p>
                    </button>

                    <div>
                      <p className="text-center mt-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Dont&apos;t have an account?{' '}
                        <Link
                          href="/signup"
                          className="font-medium text-yellow-300 hover:underline "
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
