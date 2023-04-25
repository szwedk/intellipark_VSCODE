import { useState, useEffect } from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import withAuth from '../withAuth'; // Import the withAuth HOC

function Parking() {
    const [boxColor, setBoxColor] = useState('');
    const [spotAvailable, setSpotAvailable] = useState('');
    const [timeArrived, setTimeArrived] = useState('');
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        let timer;
        let colorChangedTime;
        const intervalId = setInterval(() => {
            fetch('/api/color')
                .then(response => response.json())
                .then(data => {
                    setBoxColor(data.color);
                    setSpotAvailable(data.color === 'green' ? 'Yes' : 'No');
                    if (data.color === 'red' && !colorChangedTime) {
                        colorChangedTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' });
                        setTimeArrived(colorChangedTime);
                    }
                    if (data.color === 'red') {
                        if (!timer) {
                            timer = setInterval(() => {
                                setTimeElapsed(prevTime => prevTime + 1);
                            }, 1000);
                        }
                    } else {
                        clearInterval(timer);
                        timer = null;
                        setTimeElapsed(0);
                        setTimeArrived('');
                        colorChangedTime = null;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }, 1000);

        return () => {
            clearInterval(intervalId);
            clearInterval(timer);
        };
    }, []);

    const formatTime = (time) => {
        if (!time) {
          return '00:00:00';
        }
        if (typeof time !== 'string') {
          return time;
        }
        const [hours, minutes, seconds] = time.split(':');
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
      };

    return (
        <>
          <Head>
            <title>Parking</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
          </Head>                
          <div className="flex justify-center items-center min-h-screen">
    <div className="relative w-98 bg-opacity-30 bg-gray-100 p-12 rounded-xl transition-all duration-500">

      <div className="flex items-center justify-center px-32 py-8">
        <div className="w-40 h-40 mr-16 relative flex justify-center items-center rounded-2xl"style={{ backgroundColor: boxColor }}>
          <img src="" className="w-3/5 mt-12" />
        </div>

        <div className="text-center">
          <div className="relative mb-8 bg-gray-300 p-4 rounded-md">
            <i className="parking-icon fas fa-car mr-4"></i>
            <p className="text-black text-xl font-semibold inline">Spot Availibility</p>
            <div className="mt-4 text-3xl">{spotAvailable}</div>
          </div>

          <div className="relative mb-8 bg-gray-300 p-4 rounded-md">
            <i className="parking-icon fas fa-clock mr-4"></i>
            <p className="text-black text-xl font-semibold inline">Time Arrived</p>
            <div className="mt-4 text-3xl">{formatTime(timeArrived)}</div>
          </div>

          <div className="relative bg-gray-300 p-4 rounded-md">
            <i className="parking-icon fas fa-stopwatch mr-4"></i>
            <p className="text-black text-xl font-semibold inline">Time Elapsed</p>
            <div className="mt-4 text-3xl">{(timeElapsed)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    );
}


export default withAuth(Parking);
