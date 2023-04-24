import '@/styles/globals.css';
import '../styles/globals.css';
import Login from './login';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Login />
    </>
  );
}
