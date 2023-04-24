//import Head from 'next/head';
//import Image from 'next/image';
//import Link from 'next/link';
//import 'tailwindcss/tailwind.css';
import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
    const { googleSignin } = UserAuth();

    const handleGoogleSignIn = async() => {
        try {
            await googleSignin();
        }   catch (error) {
            console.log(error);
        }
        };


        return (
            <div>
                <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
                <div className='max-w-[240px] m-auto py-4'>
                    <GoogleButton onClick={handleGoogleSignIn} />
                </div>
            </div>
        );
};

export default Signin;
