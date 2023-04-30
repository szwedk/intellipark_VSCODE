import React from 'react';
import Link from 'next/link';

const NavigationBar = () => {
    const hostname = process.env.HOSTNAME;
    return (
        <nav className='justify-between'>
            <Link href="/">
                <button style={{ fontWeight: 'bold', color: hostname === '/' ? 'red' : 'black', padding: "10px", border: "none", background: "none", cursor: "pointer" }}>Home</button>
            </Link>
            <Link href="/signout">
                <button style={{ fontWeight: 'bold', color: hostname === '/contact' ? 'red' : 'black', border: "none", background: "none", cursor: "pointer" }}>Sign Out</button>
            </Link>
        </nav>
    );
};

export default NavigationBar;
