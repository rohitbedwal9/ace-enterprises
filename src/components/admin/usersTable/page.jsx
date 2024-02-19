'use client';

import React, { useEffect, useState } from 'react';
import { database, auth, storage } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { IoFilter } from 'react-icons/io5';
import Image from 'next/image';

export default function UserTable({ usersData, setusersData }) {
 const [sort, setSort] = useState(usersData)
    const [isSort, setIsSort] = useState(false)

    useEffect(() => {
        if (isSort) {
            setusersData(sort)
        }
    }, [isSort])

 const handleSort = () => {

        let sortedusers = usersData.sort((a, b) =>
            b.data.last_login.localeCompare(a.data.last_login))
        setSort(sortedusers)
        setIsSort(true)
    }

  return (
    <div className="w-[97%]">
      <div className="overflow-y-scroll overflow-x-auto no-scrollbar md:overflow-x-hidden max-h-screen w-full sm:mx-6 lg:mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="bg-yellow-300 p-1">
              <button
                className="-mx-5 p-1 w-full flex justify-end items-center text-sm"
                onClick={handleSort}
              >
                <IoFilter className="mx-2" />
                sort
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Key
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Login
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Download
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
             <tbody className="bg-white divide-y divide-gray-200">
                                {usersData && usersData.map((user, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-auto w-auto">
                                                    <Image className="rounded-full" src={user.data.profile_picture} alt="" width={50} height={50} />
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
    )
}