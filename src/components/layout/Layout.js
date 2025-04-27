"use client"

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Loader from '../ui/Loader';

const Layout = ({ children, title = 'Portfolio', description = 'My professional portfolio showcasing my work and skills' }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Page transition loading state
    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setTimeout(() => setLoading(false), 500);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    const fullTitle = `${title} | Your Name`;

    return (
        <>
            <Head>
                <title>{fullTitle}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
                <Navbar />

                <main className="flex-grow">
                    {loading ? (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900/80 backdrop-blur-sm">
                            <Loader />
                        </div>
                    ) : (
                        children
                    )}
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Layout;