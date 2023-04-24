import Head from 'next/head';
import Link from 'next/link';
import hero from '../components/hero'

export default function Home() {
    return (
        <div>
            <Head>
                <title>IntelliPARK</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-TM9X8l0WUM5lAaSjE0VEIVAS8fvqlxQ2vZ4jALofzD9Ad8kAsC6RvufA94dU6Q2i/RM3CCIMbZ+zsBpUUqi7g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <hero />
            <div className='index-box flex flex-col items-center space-y-4'>
                <h1>IntelliPARK</h1>
                <Link href="/Signin">
                    <button className='button-login'
                    >Login</button>
                </Link>
                <Link href="/parking">
                    <button className='button-login'
                    >Parking</button>
                </Link>
                <Link href="/showspots">
                    <button className='button-login'
                    >Spots</button>
                </Link>
                
            </div>
        </div>
    );
}
