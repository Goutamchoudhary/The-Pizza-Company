import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

// this file is for the home page ( url : '/' )
// all the page is going to be wrapped inside tha layout component.

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>The Pizza Company</title>
        <meta name="description" content="Love at first Slice" />
        <link rel="icon" href="/favicon3.ico" />
      </Head>

    <Featured/>
    <PizzaList/>
    </div>
  )
};
