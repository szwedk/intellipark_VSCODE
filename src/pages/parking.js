import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/parking.module.css';

export default function Parking() {
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

            <div className={styles['search-container']}>
                <div className={styles['search-box']}>
                    <i className="fas fa-location-dot"></i>
                    <label>
                        <input type="text" placeholder='Search for Spot' />
                    </label>
                    <button className="fas fa-magnifying-glass"></button>
                </div>

                <div className={styles['not-found']}>
                    <img src="/404notfound.png" />
                    <p>Oops! No Parking Spot :/</p>
                </div>

                <div className={styles['parking-container']}>
                    <div className={`${styles['parking-box']} ${styles['my-box']}`} style={{ backgroundColor: boxColor }}>
                        <img src="" />
                        <p className={styles['parking-spot']}></p>
                        <p className={styles['parked-card']}></p>
                    </div>

                    <div className={styles['parking-details']}>
                        <div className={styles['spot-availibility']}>
                            <i className="fas fa-car"></i>
                            <div className={styles['text']}>
                                <span></span>
                                <p>Spot Availibility</p>
                            </div>
                        </div>

                        <div className={styles['time-arrived']}>
                            <i className="fas fa-clock"></i>
                            <div className={styles['text']}>
                                <span></span>
                                <p>Time Arrived</p>
                            </div>
                        </div>

                        <div className={styles['time-elapsed']}>
                            <i className="fas fa-stopwatch"></i>
                            <div className={styles['text']}>
                                <span></span>
                                <p>Time Elapsed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
