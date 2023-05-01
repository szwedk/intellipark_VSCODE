import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_setup/firebase.js';

const NavigationBar = () => {
  const hostname = process.env.HOSTNAME;
  const [user] = useAuthState(auth);

  return (
    <nav className='justify-between'>
      <Link href='/'>
        <button
          style={{
            fontWeight: 'bold',
            color: hostname === '/' ? 'red' : 'black',
            padding: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          Home
        </button>
      </Link>
      {user ? (
        <button
          onClick={() => auth.signOut()}
          style={{
            fontWeight: 'bold',
            color: hostname === '/contact' ? 'red' : 'black',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link href='/login'>
          <button
            style={{
              fontWeight: 'bold',
              color: hostname === '/contact' ? 'red' : 'black',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </Link>
      )}
    </nav>
  );
};

export default NavigationBar;
