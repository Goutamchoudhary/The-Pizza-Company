import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>The Pizza Company</title>
                <meta name="description" content="Love at first Slice" />
                <link rel="icon" href="/favicon3.ico" />
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout