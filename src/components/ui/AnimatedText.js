// components/ui/AnimatedText.js
"use client";

import { useEffect, useState, useRef } from 'react';

const AnimatedText = ({
    text,
    tag = 'span',
    className = '',
    speed = 150,       // Typing speed (ms)
    pause = 2000,      // Pause time before deleting (ms)
    delay = 0,         // Add this: Initial delay before starting animation
    ...props
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false); // Add this state
    const mountedRef = useRef(true);

    // Add initial delay effect
    useEffect(() => {
        if (delay > 0) {
            const delayTimer = setTimeout(() => {
                if (mountedRef.current) {
                    setHasStarted(true);
                }
            }, delay);

            return () => clearTimeout(delayTimer);
        } else {
            setHasStarted(true);
        }
    }, [delay]);

    useEffect(() => {
        mountedRef.current = true;

        // Don't start animation until delay is over
        if (!hasStarted) return;

        let timer;

        if (!isDeleting && index < text.length) {
            // Typing
            timer = setTimeout(() => {
                if (mountedRef.current) {
                    setDisplayedText(prev => prev + text[index]);
                    setIndex(prev => prev + 1);
                }
            }, speed);
        } else if (isDeleting && index > 0) {
            // Deleting
            timer = setTimeout(() => {
                if (mountedRef.current) {
                    setDisplayedText(prev => prev.slice(0, -1));
                    setIndex(prev => prev - 1);
                }
            }, speed / 2); // deleting is faster
        } else if (index === text.length) {
            // Pause after fully typed
            timer = setTimeout(() => {
                if (mountedRef.current) setIsDeleting(true);
            }, pause);
        } else if (index === 0 && isDeleting) {
            // Restart typing
            setIsDeleting(false);
        }

        return () => {
            clearTimeout(timer);
            mountedRef.current = false;
        };
    }, [text, index, isDeleting, speed, pause, hasStarted]); // Add hasStarted dependency

    const Container = tag;

    return (
        <Container
            className={`inline-block whitespace-nowrap ${className}`}
            {...props}
        >
            {displayedText}
            <span className="animate-blink">|</span>
        </Container>
    );
};

export default AnimatedText;