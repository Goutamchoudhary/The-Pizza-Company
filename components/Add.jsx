import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);
    
    const handleExtraInput = (e) => {
        setExtra({...extra, [e.target.name]: e.target.value});
    };

    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
    };

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleCreate = async() => {
        const data =  new FormData();
        data.append("file", file);
        data.append("upload_preset", "pizza-uploads");
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/du7od2uuc/image/upload", data);

            const { url } = uploadRes.data;
            const newProduct = {
                title, desc, prices, extraOptions, img:url,
            };

            // nextjs doesnt allow any external url to show images, we have to configure that first in next.config
            // file
            await axios.post("http://localhost:3000/api/products", newProduct);
            setClose(true);
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>
                    X
                </span>
                <h1>Add a new Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an Image</label>
                    <input 
                    className={styles.input} 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input 
                    type="text" 
                    className={styles.input}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Desc</label>
                    <textarea 
                    rows={4} 
                    type="text" 
                    onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input 
                            className={`${styles.input} ${styles.inputSmall}`}
                            type="number" 
                            placeholder='Small' 
                            onChange={(e) => changePrice(e, 0)}
                        />
                        <input 
                            className={`${styles.input} ${styles.inputSmall}`}
                            type="number" 
                            placeholder='Medium' 
                            onChange={(e) => changePrice(e, 1)}
                        />
                        <input 
                            className={`${styles.input} ${styles.inputSmall}`}
                            type="number" 
                            placeholder='Large' 
                            onChange={(e) => changePrice(e, 2)}
                        />
                    </div>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        <input 
                            className={`${styles.input} ${styles.inputSmall}`}
                            type="text" 
                            placeholder='Item' 
                            name='text'
                            onChange={handleExtraInput}
                        />
                        <input 
                            className={`${styles.input} ${styles.inputSmall}`}
                            type="number" 
                            placeholder='Price' 
                            name='price'
                            onChange={handleExtraInput}
                        />
                        <button 
                            className={styles.extraButton} 
                            onClick={handleExtra}>
                                Add
                        </button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map((option) => (
                            <span 
                                key={option.text}
                                className={styles.extraItem}>
                                    {option.text}
                            </span>
                        ))}
                    </div>
                </div>
                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    )
}

export default Add