'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '../card';
import useDownloader from 'react-use-downloader';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, database } from '../../utils/firebase';
import { storage } from '../../utils/firebase';
import { ref as sRef, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import { ref, update } from 'firebase/database';

const data = [
  {
    id: 1,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fproject-img.jpg?alt=media&token=183fab3c-2334-4878-9ab2-97b9df3a6748',
    title: 'Project 1',
    desc: 'Bridge',
  },
  {
    id: 2,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fproject-img.jpg?alt=media&token=183fab3c-2334-4878-9ab2-97b9df3a6748',
    title: 'Project 2',
    desc: 'Road',
  },
  {
    id: 3,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fproject-img.jpg?alt=media&token=183fab3c-2334-4878-9ab2-97b9df3a6748',
    title: 'Project 3',
    desc: 'Buiding',
  },
  {
    id: 4,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fproject-img.jpg?alt=media&token=183fab3c-2334-4878-9ab2-97b9df3a6748',
    title: 'Project 4',
    desc: 'Buiding',
  },
  {
    id: 5,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fproject-img.jpg?alt=media&token=183fab3c-2334-4878-9ab2-97b9df3a6748',
    title: 'Project 5',
    desc: 'Buiding',
  },
  {
    id: 6,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fproject-img.jpg?alt=media&token=183fab3c-2334-4878-9ab2-97b9df3a6748',
    title: 'Project 6',
    desc: 'Buiding',
  },
  {
    id: 7,
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fproject-img.jpg?alt=media&token=183fab3c-2334-4878-9ab2-97b9df3a6748',
    title: 'Project 7',
    desc: 'Buiding',
  },
];

export const Projects = () => {
  const { download } = useDownloader();
  const [isUser, setIsUser] = useState(null);
  const loginWarning = () => (
    <div>
      You must
      <Link className="underline text-blue-400" href="/login">
        {' '}
        login{' '}
      </Link>
      first.
    </div>
  );
  const verifyWarning = () => (
    <div>
      You must
      <Link className="underline text-blue-400" href="/verifyemail">
        {' '}
        verify your email{' '}
      </Link>
      first.
    </div>
  );
  const notify = (text) =>
    text === 'login'
      ? toast.warning(loginWarning)
      : toast.warning(verifyWarning);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
    
      if (currentUser && currentUser.emailVerified) {
        setIsUser(currentUser);
      } else {
        setIsUser(null);
      }
    });
  }, [auth]);

  
  const onhandleClick = async (title) => {
    const user = (Object.getPrototypeOf = isUser);
    if (user && user.emailVerified) {
      const fileReference = sRef(storage, `files/${title}.pdf`);
      await getDownloadURL(fileReference)
        .then((url) => {
          update(ref(database, 'users/' + user.uid), {
            is_download: true,
          });

          download(url, `${title}.pdf`);
          toast.success('File Downloaded Successfully');
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (user) {
      notify('verify');
    } else {
      notify('login');
    }
  };

  return (
    <div className="py-5 md:px-20">
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
      <div className="flex md:flex-row gap-4 flex-col mx-5 md:mx-10 items-center">
        <div className="flex flex-col gap-4 p-4 md:p-10 align-center md:w-[70%]">
          <p className="text-xl md:text-2xl font-bold text-gray-800 ">
            What we do
          </p>
          <h1 className="text-2xl md:text-4xl font-bold w-max text-black px-2 bg-yellow-300">
            Recent Projects
          </h1>
          <p className="text-xl font-semibold">
            We design curated residential spaces that are a beautiful reflection
            of what&apos;s most important to you. Our portfolio spans all style
            disciplines, from traditional to contemporary and everything in
            between.
          </p>
        </div>
        <div className="mx-auto justify-self-center text-center md:w-[20%] ">
          <Link
            href="/projects"
            className="p-3 ml-auto rounded-3xl text-sky-600 border-sky-600 border-2    "
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="w-full flex-wrap h-100 flex md:flex-row flex-col  justify-center items-center">
        {data.map((project) => (
          <Card
            key={project.id}
            project={project}
            onhandleClick={onhandleClick}
          />
        ))}
      </div>
    </div>
  );
};
