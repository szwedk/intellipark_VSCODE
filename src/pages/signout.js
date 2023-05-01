import { useEffect } from 'react';
import Link from 'next/link';
import { googleSignOut } from '../firebase_setup/firebase.js';

const SignOut = () => {
  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await googleSignOut();
      } catch (error) {
        console.log('Error signing out:', error);
      }
    };

    handleSignOut();
  }, []);

  return (
    <div>
      <p>Signing out...</p>
      <Link href="/">
        <p>Go to Homepage</p>
      </Link>
    </div>
  );
};

export default SignOut;
