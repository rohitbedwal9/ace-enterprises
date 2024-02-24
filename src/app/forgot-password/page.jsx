'use client'
import { useEffect, useState } from 'react';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import Link from 'next/link';
import { MiniNav } from '@/components';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
     await sendPasswordResetEmail(auth, email);
      toast.success('Email send successfully');
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/invalid-email).') {
        toast.error('Invalid email.');
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        router.push('/home');

      } else {
        setShow(false);
      }
    });
  }, [auth]);


  return (
    <>
      {show ? (
        ''
      ) : (
        <div className="w-full h-screen bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Ftemp-bg.avif?alt=media&token=ce29cf09-359d-48d5-91d7-03965bb65572')] bg-no-repeat bg-cover">
          <div className="nav-mini  w-full pl-4 md:pl-16 pt-4  md:pt-6">
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
          <div className="w-full h-[90%] flex items-center justify-center px-2 py-4 lg:py-0 ">
            <div className="w-full rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6  sm:px-8">
                <h1 className="mb-5 text-center text-2xl font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                  Forgot Password
                </h1>

                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="block mt-4 mb-2 text-white text-sm font-medium">
                      Enter your email address and we will send you a ink to
                      reset your password
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={email}
                      type="email"
                      placeholder="Enter your email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-5 text-slate-700 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
                    disabled={loading ? true : false}
                  >
                    {loading ? 'Sending Email' : 'Send password reset email'}
                  </button>
                </form>
                <div className="mt-4 flex justify-center text-yellow-400 hover:text-yellow-500 text-sm">
                  <Link href="login">back to login page</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}