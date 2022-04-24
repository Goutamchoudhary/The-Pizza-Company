import styles from "../styles/Navbar.module.css";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <CallRoundedIcon fontSize='large'/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>+1188811888</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/images/pizza-company-logo.png" alt="" width={150} height={90}/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src={"/images/cart.png"} alt="" width={30} height={30}/>
                    <div className={styles.counter}>2</div>
                </div>
            </div>

        </div>
    );
};

export default Navbar