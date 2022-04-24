import React from 'react';
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/images/footer-3.jpg" objectFit='cover' alt='' layout='fill'/>
            </div>
            <div className={styles.item}>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <h2 className={styles.contact}>
                            CONTACT US.
                        </h2>
                        <span className={styles.phoneNumber}>+91-1188899987</span><br />
                        <span className={styles.phoneNumber}>+91-1188899988</span><br />
                        <span className={styles.phoneNumber}>+91-1188899989</span><br />

                    </div>
                    <div className={styles.card}>
                        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                        <p className={styles.text}>
                            222 Sushant Lok, Phase I
                            <br /> Gurugram, Haryana
                            <br /> India
                        </p>
                        <p className={styles.text}>
                            222 Sushant Lok, Phase I
                            <br /> Gurugram, Haryana
                            <br /> India
                        </p>
                        <p className={styles.text}>
                            222 Sushant Lok, Phase I
                            <br /> Gurugram, Haryana
                            <br /> India
                        </p>
                        <p className={styles.text}>
                            222 Sushant Lok, Phase I
                            <br /> Gurugram, Haryana
                            <br /> India
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h1 className={styles.title}>WORKING HOURS</h1>
                        <p className={styles.text}>
                            MONDAY TO FRIDAY
                            <br /> 9:00 AM - 10:00 PM
                        </p>
                        <p className={styles.text}>
                            SATURDAY - SUNDAY
                            <br /> 12:00 AM - 12:00 PM
                        </p>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <h2 className={styles.ownerDesc}>
                        © 2022 Gautam Choudhary
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Footer