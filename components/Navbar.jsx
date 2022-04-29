import styles from "../styles/Navbar.module.css";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

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
                    <Link href={"/"} passHref>
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/images/pizza-company-logo.png" alt="" width={150} height={90}/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href={"/cart"} passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src={"/images/cart.png"} alt="" width={30} height={30}/>
                        {quantity === 0 ? (
                            null
                        ) : (
                            <div className={styles.counter}>{quantity}</div>
                        )}
                        
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Navbar