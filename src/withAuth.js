// withAuth.js
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase_setup/firebase';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      router.replace('/Signin');
      return null;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
