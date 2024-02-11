'use client';
import { FcGoogle } from 'react-icons/fc';
import { register, google } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, database } from '../../utils/firebase';
import Link from 'next/link';
import { MiniNav, FormInput } from '@/components';
import { ToastContainer, toast } from 'react-toastify';
import { onValue } from 'firebase/database';

const inputs = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    autoFillGoogle: true,
    errorMessage:
      "Username should be minimum 3 characters and shouldn't include any special character!",
    label: 'Username',
    pattern: `[A-Za-z]{3}([A-Za-z]+ ?)*`,
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    autoFillGoogle: true,
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    autoFillGoogle: false,
    placeholder: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    label: 'Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: 'number',
    type: 'tel',
    autoFillGoogle: false,
    placeholder: 'Phone Number',
    errorMessage: 'Not a valid Phone Number',
    label: 'Phone Number',
    pattern: `[0-9]{10}`,
    required: true,
  },
];

export default function SignUp() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
  });
  const [show, setShow] = useState(true);
  const [oldUser, setOldUser] = useState(true)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const notify = (text) => toast.error(text);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        // router.push('/home');
      } else {
        setShow(false);
      }
    });
  }, [auth]);

  const handleGoogle = async () => {
    setValues({
      username: '',
      email: '',
      password: '',
      number: '',
    })
    try {
      let res = await google()

      if (res) {
        toast.success("User logged in successful")
        router.push("/home")
      }
      else {
        setOldUser(false)
        toast.info("Please Fill Empty Fields")
        setValues({ ...values, username: auth.currentUser.displayName, email: auth.currentUser.email });
      }

    }
    catch (e) {
      toast.error(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("submit")
    try {
      const res2 = await register(values)
      setValues({
        username: '',
        email: '',
        password: '',
        number: '',
      })
      console.log(res2)

      if (res2 === 'success') {
        toast.success("You account are successfully created")
        if (auth.currentUser.providerData[0].providerId === "password")
          router.push(`/verifyemail`)
        else {
          router.push(`/home`)
        }
      }
      else {
        alert("user already exist")
      }

    } catch (error) {
      notify(error)
    }
    setLoading(false)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {show ? (
        ''
      ) : (
        <div className="w-full bg-[url(https://res.cloudinary.com/dppjj5yox/image/upload/v1705992514/acehub/images/temp-bg.jpg)] bg-cover h-full">
          <div className="nav-mini w-full pl-4 md:pl-16 pt-4  md:pt-6">
            <MiniNav oldUser={oldUser} values={values} />
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

          <div className="flex flex-col items-center justify-center px-2 py-4   mx-auto lg:py-0 w-full">
            <div className="w-full rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 sm:px-8">
                <h1 className="text-center text-2xl md:font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                  Create an account
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                      className="p-2 my-0 w-full text-sm"
                      disabled={oldUser ? false : true}

                    />
                  ))}

                  <div className="flex items-start ">
                    <div className="flex items-center h-5  my-3">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className=" accent-yellow-300 w-3 md:w-4 h-3 md:h-4 border border-yellow-400 rounded bg-white"
                        required
                      />
                    </div>
                    <div className="ml-3 my-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{' '}
                        <a
                          href="#"
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`w-full text-slate-700  ${loading
                      ? 'bg-yellow-200 '
                      : 'bg-yellow-400 hover:bg-yellow-500 '
                      } focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center  dark:focus:ring-primary-800`}
                    disabled={loading ? true : false}
                  >
                    {loading ? 'Creating Account...' : 'Create an account'}
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
                    Already have an account?{' '}
                    <Link
                      href="/login"
                      className="font-medium text-yellow-300 hover:underline "
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
