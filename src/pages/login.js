import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Head>
                <title>Login</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-TM9X8l0WUM5lAaSjE0VEIVAS8fvqlxQ2vZ4jALofzD9Ad8kAsC6RvufA94dU6Q2i/RM3CCIMbZ+zsBpUUqi7g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            <div className="relative w-96 bg-opacity-30 bg-gray-100 p-12 rounded-xl transition-all duration-500 mx-auto">
                <div className="text-center">
                    <Image src="/images/intelliPARK-logo.png" alt="logo" width={130} height={100} />
                </div>
                <div className="text-center mb-8">
                    <div>Welcome to intelliPARK</div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="relative w-full">
                    <input 
                        className="w-full py-4 bg-opacity-70 bg-gray-100 text-black rounded-full" 
                        type="text" required
                        placeholder='Username' />
                    </div>
                    <div className="relative w-full">
                        <input 
                        className="w-full py-4 bg-opacity-70 bg-gray-100 text-black rounded-full" 
                        type="text" required
                        placeholder='Password' />
                    </div>
                    <div className="flex justify-between items-center text-sm mb-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember_me_check_box" />
                            <label htmlFor="remember_me_check_box">Remember me</label>
                        </div>
                        <Link href="#">
                            <span className="">Forgot password?</span>
                        </Link>
                    </div>
                    <button className="w-full py-4 bg-opacity-70 bg-gray-100 text-black rounded-full uppercase tracking-wider transition-colors duration-500 hover:bg-black hover:bg-opacity-85 hover:text-gray-100">Login</button>
                </div>
                <div className="text-center mt-6 text-sm">
                    Create an Account{' '}
                    <Link href="#">
                        <span className="hover:underline">Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}