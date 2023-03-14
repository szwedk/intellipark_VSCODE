import styles from 'src/styles/showspots.module.css';

export default function CarPark() {
    return (
        <div className={styles["car-park"]}>
                <li className={`${styles["row"]} `}>
                    <ol className={`${styles["parks"]}`} type="A">
                        <li className={`${styles["park"]}`}>
                            <input type="checkbox" id="1A" />
                            <label htmlFor="1A">1A</label>
                        </li>
                        <li className={`${styles["park"]}`}>
                            <input type="checkbox" id="1B" />
                            <label htmlFor="1B">1B</label>
                        </li>
                    </ol>
                </li>
                <li className={`${styles["row"]} `}>
                    <ol className={`${styles["parks"]}`} type="A">
                        <li className={`${styles["park"]}`}>
                            <input type="checkbox" id="2A" />
                            <label htmlFor="2A">2A</label>
                        </li>
                        <li className={`${styles["park"]}`}>
                            <input type="checkbox" id="2B" />
                            <label htmlFor="2B">2B</label>
                        </li>
                    </ol>
                </li>
                <li className={`${styles["row"]} `}>
                    <ol className={`${styles["parks"]}`} type="A">
                        <li className={`${styles["park"]}`}>
                            <input type="checkbox" id="3A" />
                            <label htmlFor="3A">3A</label>
                        </li>
                        <li className={`${styles["park"]}`}>
                            <input type="checkbox" id="3B" />
                            <label htmlFor="3B">3B</label>
                        </li>
                    </ol>
                </li>
        </div>
    );
}
