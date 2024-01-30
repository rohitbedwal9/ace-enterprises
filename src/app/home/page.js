"use client"
import { useEffect } from 'react';
import { Banner, Statics, Projects, Services, Contact, Footer } from '@/components';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';


export default function Home() {
 
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        console.log(currentUser)
      }
    });
  }, [auth])
  return (
    <main className="flex flex-col items-center">
      <Banner />
      <Statics />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
