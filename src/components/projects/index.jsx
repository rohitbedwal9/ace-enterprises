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
import { onValue, ref, update } from 'firebase/database';
import PhoneModal from '../phonemodal';

export const Projects = () => {
  const { download } = useDownloader();
  const [isUser, setIsUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [isPhoneVerify, setIsPhoneVerify] = useState(false)

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
        onValue(ref(database, 'users/' + currentUser.uid), (snapshot) => {
          let PhoneVerify = snapshot.val().number !== ""
          if (!PhoneVerify) {
            setIsPhoneVerify(false)
          }
          else {
            setIsPhoneVerify(true)
          }

        });
      } else {
        setIsUser(null);
      }
      const dbref = ref(database, 'projects');
      onValue(dbref, (snapshot) => {
        let arr = [];
        let counter = 0;
        snapshot.forEach((doc) => {
          if (counter < 8) {
            arr.push({ ...doc.val() });
            counter++;
          }
        });
        setProjects(arr);
      });
    });
  }, [auth]);


  const handlePhoneNumber = async (number) => {
    console.log(number, isUser)
    await update(ref(database, "users/" + isUser.uid), {
      number: number
    })
  }

  const onhandleClick = async (project) => {
    const user = (Object.getPrototypeOf = isUser);
    if (user && user.emailVerified) {


      if (isPhoneVerify) {
        console.log("download")
        const fileReference = sRef(storage, `files/${project.id}.pdf`);
        await getDownloadURL(fileReference)
          .then((url) => {
            toast.success('File Downloaded Successfully');
            update(ref(database, 'users/' + user.uid), {
              is_download: true,
            });
            let NoOfdownloads = project.downloads + 1

            update(ref(database, 'projects/' + project.id), {
              downloads: NoOfdownloads,
            });

            download(url, `${project.title}.pdf`);

          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        setShowModal(true)
        console.log("modal open")
      }
    } else if (user) {
      notify('verify');
    } else {
      notify('login');
    }
  };

  return (
    <div className="py-5 md:px-20">

      <div data-aos="fade-in" className="flex md:flex-row gap-4 flex-col mx-5 md:mx-10 items-center">
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

      <div data-aos="fade-in" className=" flex-wrap h-100 flex md:flex-row flex-col  justify-center items-center">
        {projects &&
          projects.map((project, index) => (
            <div data-aos="fade-in" >
              <Card key={index} project={project} onhandleClick={onhandleClick} />
            </div>
          ))}
      </div>

      <PhoneModal

        showModal={showModal}
        setShowModal={setShowModal}
        handlePhoneNumber={handlePhoneNumber}
      />

    </div>
  );
};