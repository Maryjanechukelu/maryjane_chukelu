"use client"

import Head from 'next/head';
import { useRouter, usePathname  } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Loader from '../ui/Loader';

const Layout = ({ children, title = 'Portfolio', description = 'My professional portfolio showcasing my work and skills' }) => {
    const router = useRouter();
    const pathname = usePathname(); // Use pathname to track route changes
    const [loading, setLoading] = useState(false);

    // Modified page transition loading approach for App Router
    useEffect(() => {
        // This will create a custom event listener for navigation
        const handleStartLoading = () => {
            setLoading(true);
        };

        const handleCompleteLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500); // Delay to avoid abrupt transitions
        };

        // Add event listeners for navigation
        document.addEventListener('navigationStart', handleStartLoading);
        document.addEventListener('navigationComplete', handleCompleteLoading);

        // Clean up event listeners when the component is unmounted
        return () => {
            document.removeEventListener('navigationStart', handleStartLoading);
            document.removeEventListener('navigationComplete', handleCompleteLoading);
        };
    }, []);

    // React to pathname changes
    useEffect(() => {
        // When pathname changes, stop loading after a short delay
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [pathname]);

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