import React from 'react';


const NavigationBar = () => {
    const hostname = process.env.HOSTNAME;
    return (
        <nav className='justify-between'>
            <a href="/" style={{fontWeight: 'bold', color: hostname === '/' ? 'red' : 'black',padding: "10px"}}>Home</a>
            <a href="./auth_signout" style={{fontWeight: 'bold', color: hostname === '/contact' ? 'red' : 'black'}}>Sign Out</a>
        </nav>
    );
};

export default NavigationBar;