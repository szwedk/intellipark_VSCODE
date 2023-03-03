import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <div>
            <Head>
                <title>Login</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-TM9X8l0WUM5lAaSjE0VEIVAS8fvqlxQ2vZ4jALofzD9Ad8kAsC6RvufA94dU6Q2i/RM3CCIMbZ+zsBpUUqi7g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="/src/styles/login.module.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            <div className="login-card-container">
                <div className="login-card">
                    <div className="login-card-logo">
                        <Image src="/app/static/images/intelliPARK-logo.png" alt="logo" width={100} height={100} />
                    </div>
                    <div className="login-card-header">
                        <div>Welcome to intelliPARK</div>
                    </div>
                    <div className="login-card-form">
                        <div className="form-item">
                            <label>
                                <input type="text" required />
                            </label>
                            <span className="form-item-icon material-symbols-rounded">person</span>
                            <div className="label">Username</div>
                        </div>
                        <div className="form-item">
                            <label>
                                <input type="text" required />
                            </label>
                            <span className="form-item-icon material-symbols-rounded">lock</span>
                            <div className="label">Password</div>
                        </div>
                        <div className="form-item-other">
                            <div className="checkbox">
                                <input type="checkbox" id="remember_me_check_box" />
                                <label htmlFor="remember_me_check_box">Remember me</label>
                            </div>
                            <Link href="#">
                                <span>Forgot password?</span>
                            </Link>
                        </div>
                        <button type="submit">Login</button>
                    </div>
                    <div className="login-card-footer">
                        Create an Account{' '}
                        <Link href="#">
                            <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
