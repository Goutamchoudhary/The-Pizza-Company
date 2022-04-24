import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import { useState } from 'react';

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/images/pizza-2.png",
        name: "Margherita",
        price: [19.4, 23.5, 27.8],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit" 
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt='' layout='fill'/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/images/pizza-size.png" layout='fill' alt=''/>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/images/pizza-size.png" layout='fill' alt=''/>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/images/pizza-size.png" layout='fill' alt=''/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choos additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" id='cheese' name='cheese' className={styles.checkbox}/>
                        <label htmlFor="cheese">Extra Chesse</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id='double' name='double' className={styles.checkbox}/>
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id='spicy' name='spicy' className={styles.checkbox}/>
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id='tandoori' name='tandoori' className={styles.checkbox}/>
                        <label htmlFor="tandoori">Tandoori Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product