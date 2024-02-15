'use client';
import UserTable from '@/components/admin/usersTable/page';
import { database, auth, storage } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { ref as Sref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Projects from '@/components/admin/projects/page';
import { logout } from '@/utils/firebaseMethods';



export default function Home() {
    const [admin, setAdmin] = useState(false)
    const [usersData, setusersData] = useState([])
    const [showAll, setShowAll] = useState(true)
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        function fetchUser() {
            onAuthStateChanged(auth, (currentUser) => {
                if (currentUser && currentUser.emailVerified) {
                    console.log(currentUser)
                    const dbref = ref(database, "users");
                    onValue(dbref, (snapshot) => {
                        let records = []

                        snapshot.forEach(childSnapshot => {
                            let keyname = childSnapshot.key;
                            let data = childSnapshot.val();
                            records.push({ "keys": keyname, "data": data })
                        })
                        setusersData(records)
                    })
                    setAdmin(true);

                } else {
                    setAdmin(false);
                    return;
                }
            });
        }

        if (showAll) {
            setShowAll(true)
        }
        return () => fetchUser()
    }, [])

    




    function uploadImage() {

        if (imageUpload === null) return;

        const imageRef = Sref(storage, `images/${imageUpload.name + Math.floor(Math.random() * 1000)}`)
        uploadBytes(imageRef, imageUpload)
            .then(() => {
                alert("image uploaded!")
            })

    }

    useEffect(() => {
        const imageRef = Sref(storage, `images/`)
        function showImage() {
            listAll(imageRef)
                .then((res) => {
                    res.items.forEach((item) => {
                        getDownloadURL(item)
                            .then((url) => {
                                setImageList((prev) => {
                                    return [...prev, url]
                                })
                            })
                    })
                })
        }
        showImage()
    }, [])

    const handleLogout = () => {
        logout()
        setAdmin(false)
    }

    return (
        <div className='main h-screen'>
            <nav className="w-full p-4 flex justify-around">
                <div className='text-xl font-semibold'>Ace-Enterprises</div>
                {!admin ? (
                    <div className='text-lg'>
                        <Link href="/login" className="bg-yellow-300 hover:bg-yellow-400   p-2 rounded-lg">Login</Link>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}

            </nav>
            <div className="flex flex-col justify-center items-center ">
                <div className="text-4xl">
                    Welcome Admin
                </div>
            </div>

            {admin ? (
                <div className="w-full flex flex-col my-5  ">
                    <UserTable usersData={usersData} setusersData={setusersData} />

                    <h1 className='text-4xl font-bold text-center my-4'>Projects</h1>


                    <Projects usersData={usersData} />
                </div>

            ) : (
                <div >
                    <h1 className='bg-red-400 text-white p-4 text-center my-4 '>Please Login as admin to see users</h1>
                </div>
            )}

            <div className='flex flex-col justify-center bg-gray-50'>
                <input type='file' onChange={(e) => setImageUpload(e.target.files[0])} />
                <button onClick={uploadImage}>upload Image</button>

                {imageList && imageList.map((url, index) => {
                    return <img key={index} src={url} width={100} />
                })}
            </div>
        </div>
    );
}