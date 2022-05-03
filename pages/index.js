import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import { useState } from 'react'

//require('dotenv').config();

// this file is for the home page ( url : '/' )
// all the page is going to be wrapped inside tha layout component.

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>

      <Head>
        <title>The Pizza Company</title>
        <meta name="description" content="Love at first Slice" />
        <link rel="icon" href="/favicon3.ico" />
      </Head>

    <Featured/>
    {admin && <AddButton setClose={setClose}/>}
    <PizzaList pizzaList={pizzaList} />
    {!close && <Add setClose={setClose}/>}
    </div>
  )
};


export const getServerSideProps = async(context) => {
    const myCookie = context.req?.cookies || "";
    let admin = false;

    if(myCookie.token === process.env.TOKEN){
        admin = true;
    }
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    const res = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`);

    return {
      props:{
        pizzaList: res.data,
        admin,
      },
    };
}
