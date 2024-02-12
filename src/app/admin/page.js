'use client';
import { database, auth } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
    const [admin, setAdmin] = useState(false)
    const [usersData, setusersData] = useState([])

    useEffect(() => {

        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.emailVerified) {
                setAdmin(true);

            } else {
                setAdmin(false);
                return;
            }
        });

        const dbref = ref(database, "users");
        onValue(dbref, (snapshot) => {
            let records = []
           
            snapshot.forEach(childSnapshot => {
                console.log(childSnapshot)
                let keyname = childSnapshot.key;
                let data = childSnapshot.val();
                console.log(childSnapshot.key, childSnapshot.val())
                records.push({ "keys": keyname, "data": data })
            })
            setusersData(records)
        })

    }, [])
    console.log(usersData)
    return (
        <div className='main h-screen'>
            <nav className="w-full p-4 flex justify-around">
                <div className='text-xl font-semibold'>Ace-Enterprises</div>
                <div className='text-lg'>
                    <Link href="/admin/login" className="bg-yellow-300 hover:bg-yellow-400   p-2 rounded-lg">Login</Link>
                </div>
            </nav>
            <div className="flex flex-col justify-center items-center ">
                <div className="text-4xl">
                    Welcome Admin
                </div>
            </div>
            {admin ? (
                <div className="w-full flex flex-col my-5  ">
                    <div className=" overflow-x-auto sm:mx-6 lg:mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                User
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Key
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Phone Number
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Last Login
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Download
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {usersData.map((user, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img className="h-10 w-10 rounded-full" src={user.data.profile_picture} alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{user.data.name}</div>
                                                            <div className="text-sm text-gray-500">{user.data.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {/* <div className="text-sm text-gray-900">{user.keys}</div> */}
                                                    <div className="text-sm text-gray-900">hidden</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.data.role}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.data.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.data.number}
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.data.last_login}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.data.is_download ? "Yes" : "No"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div >
                    <h1 className='bg-red-400 text-white p-4 text-center my-4 '>Please Login as admin to see users</h1>
                </div>
            )}




        </div>

    );
}