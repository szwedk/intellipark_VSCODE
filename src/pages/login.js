import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_setup/firebase.js';
import firebase from 'firebase/compat/app';
import GoogleButton from 'react-google-button';
import 'tailwindcss/tailwind.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error);
    });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((error) => {
      console.log(error);
    });
  };

  return (
    
            <div className='flex justify-center items-center'><GoogleButton onClick={signInWithGoogle} /></div>

  );
}
