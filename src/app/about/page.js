"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Timeline from '@/components/sections/Timeline';
import { ArrowRight, Download } from 'lucide-react';

// Sample experience data - replace with your actual experience
const experiences = [
    {
        year: '2022 - Present',
        title: 'Senior Frontend Developer',
        company: 'Tech Innovations Inc.',
        description: 'Leading the frontend development team in building responsive web applications using React and Next.js. Implementing design systems and improving performance metrics across projects.'
    },
    {
        year: '2020 - 2022',
        title: 'Full Stack Developer',
        company: 'WebSolutions Group',
        description: 'Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with design teams to implement responsive UI components and RESTful APIs.'
    },
    {
        year: '2018 - 2020',
        title: 'Web Developer',
        company: 'Digital Creatives',
        description: 'Created responsive websites for clients across various industries. Utilized HTML, CSS, JavaScript, and WordPress to deliver custom web solutions.'
    },
    {
        year: '2016 - 2018',
        title: 'Junior Developer',
        company: 'StartupHub',
        description: 'Assisted the development team in building and maintaining web applications. Gained experience with frontend frameworks and version control systems.'
    }
];

export default function About() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <Head>
                <title>About | Your Name</title>
                <meta name="description" content="Learn more about my background, experience, and approach to web development" />
            </Head>

            {/* About Hero */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                            About Me
                        </h1>
                        <p className="text-lg text-gray-300">
                            My journey, experience, and passion for creating
                            exceptional web experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-fuchsia-600 rounded-xl transform rotate-6 scale-95 opacity-20 blur-xl animate-pulse"></div>
                                <div className="relative rounded-xl overflow-hidden border-2 border-purple-500/20 aspect-square">
                                    {/* Replace with your actual image */}
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Your Name"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Pattern overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900 mix-blend-overlay"></div>
                            </div>
                        </motion.div>

                        {/* Bio */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={fadeInUp}>
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    Hey, I&apos;m <span className="text-purple-300">Your Name</span> 👋
                                </h2>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <p className="text-gray-300 mb-4">
                                    I&apos;m a passionate full-stack developer with over 6 years of experience creating
                                    modern web applications. I specialize in building responsive, accessible, and
                                    performant web experiences using cutting-edge technologies.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <p className="text-gray-300 mb-6">
                                    My journey in web development began with a curiosity for creating digital solutions
                                    that solve real problems. Today, I work with clients and companies to bring their visions to life
                                    through clean code and thoughtful design.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Education</h3>
                                        <p className="text-gray-400">B.S. Computer Science<br />University of Technology, 2016</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Location</h3>
                                        <p className="text-gray-400">San Francisco, California<br />Available for remote work</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-purple-500/20"
                                >
                                    Get In Touch
                                    <ArrowRight size={18} />
                                </Link>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="px-6 py-3 rounded-lg font-medium border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
                                >
                                    Download Resume
                                    <Download size={18} />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Professional Journey */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                                Professional Journey
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto"></div>
                        </div>

                        <Timeline experiences={experiences} />
                    </div>
                </div>
            </section>

            {/* Personal Approach */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">My Approach to Web Development</h2>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div>
                                    <h3 className="text-purple-300 font-medium mb-2">User-Centered Design</h3>
                                    <p className="text-gray-300 text-sm">
                                        I believe in creating websites that not only look beautiful but also provide
                                        exceptional user experiences. Every design choice should serve the needs of the end user.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-purple-300 font-medium mb-2">Clean & Maintainable Code</h3>
                                    <p className="text-gray-300 text-sm">
                                        Writing clean, well-documented code is essential for long-term project success.
                                        I focus on creating maintainable solutions that can evolve with your business.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-purple-300 font-medium mb-2">Continuous Learning</h3>
                                    <p className="text-gray-300 text-sm">
                                        The web development landscape is always changing. I&apos;m committed to staying current
                                        with the latest technologies and best practices through continuous learning.
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-300">
                                When working on projects, I prioritize clear communication, timely delivery, and
                                exceeding expectations. I enjoy collaborating with teams to solve complex problems
                                and create exceptional digital experiences that make an impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}