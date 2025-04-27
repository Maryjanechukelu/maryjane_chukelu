// components/ui/ThemeToggle.js
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative h-8 w-8 rounded-full bg-purple-800/30 hover:bg-purple-700/40 flex items-center justify-center text-purple-200 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;