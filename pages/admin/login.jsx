import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/router";
import styles from "../../styles/Login.module.css";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async() => {
        
        try{
            let dev = process.env.NODE_ENV !== 'production';
            let PROD_URL = process.env.PROD_URL;
            let DEV_URL = process.env.DEV_URL;

            await axios.post(`${dev ? DEV_URL : PROD_URL}/api/login`, {username, password});
            router.push("/admin");
        }
        catch(err){
            setError(true);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 >Admin Dashboard</h1>
                <input 
                    type="text" 
                    placeholder='username'
                    className={styles.input} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='password'
                    className={styles.input} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className={styles.button}>
                    Sign In
                </button>

                {error && <span className={styles.error}>Wrong Credentials!</span>}

            </div>
        </div>
    )
}

export default Login