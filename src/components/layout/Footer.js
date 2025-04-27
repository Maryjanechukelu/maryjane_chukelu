// components/layout/Footer.js
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/yourusername' },
        { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/yourusername' },
        { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://twitter.com/yourusername' },
        { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://instagram.com/yourusername' },
        { name: 'Email', icon: <Mail size={18} />, url: 'mailto:your@email.com' },
    ];

    const footerLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Skills', href: '/skills' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    // Animation variants
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.footer
            className="bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/10 text-purple-100/80 pt-16 pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo and Description */}
                    <div className="flex flex-col">
                        <Link href="/" className="text-2xl font-bold text-white mb-4">
                            DevName
                        </Link>
                        <p className="text-sm text-purple-100/70 mb-6">
                            A passionate web developer focused on building beautiful, functional and user-friendly applications with modern technologies.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 mt-auto">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-purple-400 transition-colors duration-300"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-sm hover:text-purple-400 transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
                        <p className="text-sm text-purple-100/70 mb-4">
                            Subscribe to get the latest updates on my projects and blog posts.
                        </p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-purple-900/30 border border-purple-500/20 text-purple-100 placeholder-purple-300/50 rounded-l-lg py-2 px-4 flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-r-lg transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-6 border-t border-purple-500/10 text-center text-sm text-purple-100/60">
                    <p>© {currentYear} DevName. All rights reserved.</p>
                    <p className="mt-1">
                        Designed and built with ❤️ using Next.js and Tailwind CSS
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;