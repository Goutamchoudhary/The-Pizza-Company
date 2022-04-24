import Image from "next/image";
import styles from "../styles/Featured.module.css";
import React from 'react'
import { useState } from "react";

const Featured = () => {
    const images = [
        "/images/featured-1.png",
        "/images/featured-2.png",
        "/images/featured-3.png",
    ];

    const [index, setIndex] = useState(0);
    
    const handleArrow = (direction) => {
        if(direction === "left"){
            setIndex(index !== 0 ? index-1 : 2);
        }
        if(direction === "right"){
            setIndex(index !== 2 ? index+1 : 0);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style= {{left : 0}} onClick={() => handleArrow("left")}>
                <Image src="/images/arrowleft.png" alt="" layout='fill'/>
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}> 
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt="" layout='fill' objectFit="contain"/>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style= {{right : 0}} onClick={() => handleArrow("right")}>
                <Image src="/images/arrowright.png" alt="" layout='fill'/>
            </div>
        </div>
    )
}

export default Featured