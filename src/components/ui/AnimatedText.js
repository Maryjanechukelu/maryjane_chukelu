// components/ui/AnimatedText.js
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedText = ({
    text,
    tag = 'span',
    className = '',
    animation = 'wave', // wave, typewriter, fade, highlight
    delay = 0,
    duration = 0.5,
    once = true,
    staggerChildren = 0.03,
    ...props
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
    const controls = useAnimation();

    // Animations
    const animations = {
        wave: {
            hidden: { opacity: 0, y: 20 },
            visible: (i = 0) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: delay + (staggerChildren * i),
                    duration: duration,
                    ease: [0.22, 1, 0.36, 1]
                }
            })
        },
        typewriter: {
            hidden: { opacity: 0, x: -20 },
            visible: (i = 0) => ({
                opacity: 1,
                x: 0,
                transition: {
                    delay: delay + (staggerChildren * i),
                    duration: duration,
                    ease: [0.22, 1, 0.36, 1]
                }
            })
        },
        fade: {
            hidden: { opacity: 0 },
            visible: (i = 0) => ({
                opacity: 1,
                transition: {
                    delay: delay + (staggerChildren * i),
                    duration: duration
                }
            })
        },
        highlight: {
            hidden: { backgroundSize: '0% 100%' },
            visible: () => ({
                backgroundSize: '100% 100%',
                transition: {
                    delay,
                    duration: duration * 2,
                    ease: [0.22, 1, 0.36, 1]
                }
            })
        }
    };

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    // For highlight animation
    if (animation === 'highlight') {
        return (
            <motion.span
                ref={ref}
                className={`inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat bg-left-bottom ${className}`}
                style={{ backgroundSize: '0% 100%', backgroundPosition: '0 95%', padding: '0.1em 0' }}
                initial="hidden"
                animate={controls}
                variants={animations.highlight}
                {...props}
            >
                {text}
            </motion.span>
        );
    }

    // For other animations (character by character)
    const Container = motion[tag];
    const selectedAnimation = animations[animation];

    return (
        <Container
            ref={ref}
            className={`inline-block ${className}`}
            {...props}
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className="inline-block"
                    custom={index}
                    initial="hidden"
                    animate={controls}
                    variants={selectedAnimation}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </Container>
    );
};

export default AnimatedText;