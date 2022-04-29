import React from 'react';
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

const PizzaList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN YOUR LOCALITY</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi 
                veritatis tempore blanditiis maxime temporibus delectus nulla 
                reprehenderit, magni sapiente? Ipsum iste sit debitis nihil eum 
                temporibus provident quaerat aut possimus.
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