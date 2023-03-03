import Head from 'next/head';
import styles from 'src/styles/parking.module.css';

function Parking() {
    return (
        <>
            <Head>
                <title>Parking</title>
                <link rel="stylesheet" type="text/css" href="src/styles/parking.module.css" />
                <script src="https://kit.fontawesome.com/b918a6c8b6.js" crossOrigin="anonymous"></script>
                <script src="index.js"></script>
            </Head>

            <div className={styles["search-container"]}>
                <div className={styles["search-box"]}>
                    <i className="fa-solid fa-location-dot"></i>
                    <label>
                        <input type="text" placeholder='Search for Spot' />
                    </label>
                    <button className="fa-solid fa-magnifying-glass"></button>
                </div>

                <div className={styles["not-found"]}>
                    <img src="public/404notfound.png" />
                    <p>Oops! No Parking Spot :/</p>
                </div>

                <div className={styles["parking-container"]}>
                    <div className={styles["parking-box"]} id="myBox" style={{ backgroundColor: "pink" }}>
                        <style dangerouslySetInnerHTML={{ __html: "#myBox {\n" +
                                "                        padding: 100px;\n" +
                                "                        width: 100px;\n" +
                                "                        height: 100px;\n" +
                                "                        text-align: center;\n" +
                                "                        align-items: center;\n" +
                                "                        margin: 5px auto;\n" +
                                "                        border-radius: 10px;\n" +
                                "                    }" }}></style>

                        <img src=""/>
                        <p className={styles["parking-spot"]}></p>
                        <p className={styles["parked-card"]}></p>
                    </div>

                    <div className={styles["parking-details"]}>
                        <div className={styles["spot-availibility"]}>
                            <i className="fa-solid fa-car"></i>
                            <div className={styles["text"]}>
                                <span></span>
                                <p>Spot Availibility</p>
                            </div>
                        </div>

                        <div className={styles["time-arrived"]}>
                            <i className="fa-solid fa-clock"></i>
                            <div className={styles["text"]}>
                                <span></span>
                                <p>Time Arrived</p>
                            </div>
                        </div>

                        <div className={styles["time-elapsed"]}>
                            <i className="fa-solid fa-stopwatch"></i>
                            <div className={styles["text"]}>
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

export default Parking;
