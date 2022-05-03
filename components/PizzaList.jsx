import React from 'react';
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

const PizzaList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN YOUR LOCALITY</h1>
            <p className={styles.desc}>
                At The Pizza Company, we don’t just make pizza. We make people happy. The 
                Pizza Company was built on the belief that pizza night should be special, and 
                we carry that belief into everything we do. With more than 25 years 
                of experience under our belts, we understand how to best serve our 
                customers through tried and true service principles: <b>We create food 
                we’re proud to serve and deliver it fast, with a smile.</b>
            </p>
            <div className={styles.wrapper}>
                
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}

            </div>
        </div>
    )
}

export default PizzaList