// components/ui/Loader.js
import { motion } from 'framer-motion';

const Loader = ({ size = 'md', color = 'purple' }) => {
    // Size variants
    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-10 h-10',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    // Color variants
    const colors = {
        purple: 'border-purple-500',
        white: 'border-white',
        gray: 'border-gray-300',
        blue: 'border-blue-500',
        green: 'border-green-500'
    };

    const circleVariants = {
        spin: {
            rotate: 360,
            transition: {
                duration: 1.2,
                ease: "linear",
                repeat: Infinity
            }
        }
    };

    const dotVariants = {
        initial: { scale: 0.8 },
        animate: {
            scale: [0.8, 1.3, 0.8],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="relative flex items-center justify-center">
            {/* Spinning border */}
            <motion.div
                className={`${sizes[size]} rounded-full border-b-2 border-r-2 border-t-2 ${colors[color]} opacity-75`}
                variants={circleVariants}
                animate="spin"
            />

            {/* Pulsing dot */}
            <motion.div
                className={`absolute rounded-full bg-purple-500 ${size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'
                    }`}
                variants={dotVariants}
                initial="initial"
                animate="animate"
            />
        </div>
    );
};

export default Loader;