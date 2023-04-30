import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signOut } from '../firebase_setup/firebase.js'; // Replace with your Firebase Auth utility

const SignOut = () => {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        // Sign out the user using Firebase Authentication
        await signOut();
        // Redirect the user to the index page
        router.push('/');
      } catch (error) {
        console.log('Error signing out:', error);
      }
    };

    handleSignOut();
  }, [router]);

  return null; // or you can show a loading spinner or a message here
};

export default SignOut;
