
import { useState, useEffect } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import withAuth from '../withAuth'; // Import the withAuth HOC

function Parking() {
    const [boxColor, setBoxColor] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch('/api/color')
                .then(response => response.json())
                .then(data => {
                    setBoxColor(data.color);
                })
                .catch(error => {
                    console.log(error);
                });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Parking</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
            </Head>

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-e8a49c via-3c4cad">
                <div className="relative w-500 p-24 bg-opacity-30 bg-gray-200 rounded-2xl transition-all duration-300">
                    <div className="flex items-center justify-between p-4">
                        <i className="text-maroon text-4xl fas fa-location-dot"></i>
                        <input
                            type="text"
                            placeholder='Search for Spot'
                            className="w-4/5 text-xl font-semibold pl-8 text-black"
                        />
                        <button className="w-12 h-12 text-maroon bg-white rounded-full text-4xl transition-colors duration-300 hover:text-white hover:bg-maroon">
                            <i className="fas fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div className="text-center mt-12 opacity-0 hidden">
                        <img src="/404notfound.png" className="w-2/3 mx-auto" />
                        <p className="text-2xl font-semibold mt-4 text-black">Oops! No Parking Spot :/</p>
                    </div>

                    <div className="flex items-center justify-center px-32 py-8">
                        <div className="w-40 h-40 mr-16 relative flex justify-center items-center rounded-2xl"style={{ backgroundColor: boxColor }}>
                            <img src="" className="w-3/5 mt-12" />
                        </div> 
                        
                        <div className="text-center">
                            <div className="relative mb-8">
                                <i className="parking-icon fas fa-car"></i>
                                <span className="absolute -ml-4 text-3xl"></span>
                                <p className="text-black text-xl font-semibold mt-12">Spot Availibility</p>
                            </div>

                            <div className="relative mb-8">
                                <i className="parking-icon fas fa-clock"></i>
                                <span className="absolute -ml-4 text-3xl"></span>
                                <p className="text-black text-xl font-semibold mt-12">Time Arrived</p>
                            </div>

                            <div className="relative">
                                <i className="parking-icon fas fa-stopwatch"></i>
                                <span className="absolute -ml-4 text-3xl"></span>
                                <p className="text-black text-xl font-semibold mt-12">Time Elapsed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withAuth(Parking);