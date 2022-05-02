import React, { useState }  from 'react'
import styles from "../styles/OrderDetails.module.css";

const OrderDetails = ({total, createOrder, setClose}) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    
    const handleClick = () => {
        createOrder({customer, address, total, method:0})
    }

    return (
        
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>
                    X
                </span>
                <h1 className={styles.title}>You will pay ${total} after delivery.</h1>
                <div className={styles.item}>
                    <label htmlFor="" className={styles.label}>Full Name</label>
                    <input 
                        placeholder='John Doe' 
                        type="text" 
                        className={styles.input}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label htmlFor="" className={styles.label}>Phone Number</label>
                    <input 
                        placeholder='+91-9311994437' 
                        type="text" 
                        className={styles.input}
                    />
                </div>
                <div className={styles.item}>
                    <label htmlFor="" className={styles.label}>Address</label>
                    <textarea 
                        placeholder='Type your Address here'
                        rows={5} 
                        type="textarea" 
                        className={styles.textarea}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
            </div>
        </div>
    )
}

export default OrderDetails