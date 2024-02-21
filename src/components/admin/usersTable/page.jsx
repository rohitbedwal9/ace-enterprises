'use client';

import React, { useEffect, useState } from 'react';
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


  useEffect(() => {
    if (usersData !== null) setusersData(sort);
  }, [sort]);

  const handleSort = () => {
    let sortedusers = usersData.sort((a, b) =>
      b.data.last_login.localeCompare(a.data.last_login)
    );
    setSort(sortedusers);
  };

  return (
    <div className="w-[97%]">
      <div className="p-2  flex sm:w-[95%] rounded  justify-center sm:mx-12 lg:mx-16 items-center bg-yellow-400 ">
        <button
          className=" w-full flex px-5  justify-end items-center text-sm"
          onClick={handleSort}
        >
          <IoFilter className="mx-2" />
          sort
        </button>
      </div>
      <div className="overflow-y-scroll overflow-x-auto  md:overflow-x-hidden max-h-screen w-full sm:mx-6 lg:mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                 
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {usersData &&
                  usersData.map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-auto w-auto">
                            <Image
                              className="rounded-full"
                              src={user.data.profile_picture}
                              alt=""
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className=" px-4 py-2 ">
                            <div className="text-sm font-medium text-gray-900">
                              {user.data.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.data.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm px-2 text-gray-900">{user.keys}</div>
                      
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
                        {user.data.is_download ? 'Yes' : 'No'}
                      </td>
                      
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}