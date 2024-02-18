'use client';
import UserTable from '@/components/admin/usersTable/page';
import { database, auth } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Projects from '@/components/admin/projects/page';
import { logout } from '@/utils/firebaseMethods';
import { ScrollUp } from '@/components';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [admin, setAdmin] = useState(true)
    const [usersData, setusersData] = useState([])
    const router = useRouter();

    useEffect(() => {
        function fetchUser() {
            onAuthStateChanged(auth, (currentUser) => {
                if (currentUser && currentUser.emailVerified) {

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
            }
        }
    }, [admin])

    const handleLogout = () => {
        logout()
        setAdmin(false)
    }

    return (
        <div className='main h-screen'>
            <ScrollUp/>
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
                    <div className="w-full flex flex-col my-5  ">
                        <UserTable usersData={usersData} setusersData={setusersData} />

                        <h1 className='text-4xl font-bold text-center my-4'>Projects</h1>

                        <Projects usersData={usersData} />
                    </div>
                </div>
            ) : (
                <div>
                </div>
            )}

        </div>
    );
}