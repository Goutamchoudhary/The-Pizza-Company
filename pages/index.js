import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

// this file is for the home page ( url : '/' )
// all the page is going to be wrapped inside tha layout component.

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>

      <Head>
        <title>The Pizza Company</title>
        <meta name="description" content="Love at first Slice" />
        <link rel="icon" href="/favicon3.ico" />
      </Head>

    <Featured/>
    <PizzaList pizzaList={pizzaList} />
    </div>
  )
};


export const getServerSideProps = async() => {
    const res = await axios.get("http://localhost:3000/api/products");

    return {
      props:{
        pizzaList: res.data,
      },
    };
}