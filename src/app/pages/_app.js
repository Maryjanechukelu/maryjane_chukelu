"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';


export default function MyApp({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);

    // For handling client-side rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Head>
                <title>Your Name | Portfolio</title>
                <meta name="description" content="Personal portfolio showcasing my projects and skills" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {mounted && (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </>
    );
}
