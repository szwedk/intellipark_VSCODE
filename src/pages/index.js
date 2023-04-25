import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/hero';
import Login from './login';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Head>
                <title>IntelliPARK</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-TM9X8l0WUM5lAaSjE0VEIVAS8fvqlxQ2vZ4jALofzD9Ad8kAsC6RvufA94dU6Q2i/RM3CCIMbZ+zsBpUUqi7g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            <Hero />
            <div className='index-box flex flex-col items-center space-y-4 pt-10'>
                <h1 className="text-4xl font-bold mb-10">IntelliPARK</h1>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="relative w-96 bg-opacity-30 bg-gray-100 p-12 rounded-xl transition-all duration-500 mx-auto">
                        <div className="text-center mb-6">
                            <Image src="/images/intelliPARK-logo.png" alt="logo" width={130} height={100} />
                        </div>
                        <div className="text-center mb-8">
                            <div className="text-xl font-semibold mb-4">Welcome to intelliPARK</div>
                            <Login />
                        </div>
                        <div className="flex justify-between mt-6">
                            <Link href="/parking">
                                <button className='button-login px-6 py-2 rounded-md bg-blue-500 text-white font-semibold'>
                                    Parking
                                </button>
                            </Link>
                            <Link href="/showspots">
                                <button className='button-login px-6 py-2 rounded-md bg-blue-500 text-white font-semibold'>
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

