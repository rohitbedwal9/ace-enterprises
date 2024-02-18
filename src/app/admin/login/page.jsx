'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="main h-screen flex  justify-center items-center bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fbackground-building.jpg?alt=media&token=760cb498-ad2b-4a28-912b-888c8ef80b3f')] ">
      <form className="flex-col flex shadow-xl rounded-lg gap-2 p-5 md:w-[30%] bg-white bg-opacity-20 backdrop-blur-sm">
        <h1 className="text-4xl text text-center">Admin Login</h1>
        <div>
          <label for="email" className="text-black font-bold">Email</label>
          <input
            type="email"
            name='email'
            onValue={setEmail}
            placeholder="Enter Email"
            className="w-full  p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label for="password" className="text-black font-bold">Password</label>
          <input
            type="password"
            name='password'
            onValue={setPassword}
            placeholder="Enter Password"
            className="w-full p-2 rounded-lg"
            required
          />
        </div>
        <div className="w-full">
          <button className="bg-yellow-300 w-full hover:bg-yellow-400 p-2 rounded-lg" name='adminlogin'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
