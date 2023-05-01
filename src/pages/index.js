import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/hero';
import Login from './login';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_setup/firebase.js';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const checkAuthentication = () => {
      setIsAuthenticated(!!user);
    };

    checkAuthentication();
  }, [user]);

  return (
    <div>
      <Head>
        <title>IntelliPARK</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
          integrity="sha512-TM9X8l0WUM5lAaSjE0VEIVAS8fvqlxQ2vZ4jALofzD9Ad8kAsC6RvufA94dU6Q2i/RM3CCIMbZ+zsBpUUqi7g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <Hero />
      <div className="index-box flex flex-col items-center pt-10 mt-40">
        <div className="flex justify-center items-center max-h-screen">
          <div className="relative w-96 bg-opacity-30 bg-gray-100 p-12 rounded-xl transition-all duration-500 mx-auto">
            <div className="text-center mb-6">
              <Image
                className="rounded-xl"
                src="/images/intelliPARK-logo.png"
                alt="logo"
                width={340}
                height={200}
              />
            </div>
            <div className="text-center mb-8">
              <Login />
            </div>
            <div className="flex relative justify-evenly  pt-2 py-10">
              <Link href="/parking">
                <button
                  className={`button-login px-6 py-3 rounded-md font-semibold cursor-pointer ${
                    isAuthenticated ? '' : 'grayed-out'
                  }`}
                >
                  Parking
                </button>
              </Link>
              <Link href="/showspots">
                <button
                  className={`button-login px-6 py-3 rounded-md font-semibold cursor-pointer ${
                    isAuthenticated ? '' : 'grayed-out'
                  }`}
                >
                  Spots
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
