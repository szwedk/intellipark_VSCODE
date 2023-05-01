import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_setup/firebase.js';
import firebase from 'firebase/compat/app';
import GoogleButton from 'react-google-button';
import 'tailwindcss/tailwind.css';

export default function Login() {
  const [user, loading, error] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <p>You are logged in as {user.email}</p>
        ) : (
          <GoogleButton onClick={signInWithGoogle} />
        )}
      </div>
    </div>
  );
}
