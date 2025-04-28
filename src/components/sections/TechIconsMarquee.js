// components/sections/TechIconsMarquee.js
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const TechIconsMarquee = ({ icons, direction = 'left', speed = 'medium' }) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    // Set animation speed based on prop
    const getAnimationDuration = () => {
        const speeds = {
            slow: '60s',
            medium: '30s',
            fast: '15s'
        };
        return speeds[speed] || speeds.medium;
    };

    useEffect(() => {
        if (!scrollerRef.current || !containerRef.current) return;

        const scrollerContent = Array.from(scrollerRef.current.children);

        // Duplicate scroller items for infinite scroll effect
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            scrollerRef.current.appendChild(duplicatedItem);
        });

        // Pause animation on hover
        const handleMouseEnter = () => {
            scrollerRef.current.style.animationPlayState = 'paused';
        };

        const handleMouseLeave = () => {
            scrollerRef.current.style.animationPlayState = 'running';
        };

        containerRef.current.addEventListener('mouseenter', handleMouseEnter);
        containerRef.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
                containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden bg-gradient-to-r from-purple-900/30 to-fuchsia-900/30 backdrop-blur-sm py-8 rounded-lg"
        >
            <div
                ref={scrollerRef}
                className="flex gap-8 py-4"
                style={{
                    animation: `scroll${direction === 'right' ? 'Right' : 'Left'} ${getAnimationDuration()} linear infinite`
                }}
            >
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-24 mx-4 filter grayscale hover:filter-none transition-all duration-300"
                    >
                        <div className="relative w-16 h-16 mb-2">
                            <Image
                                src={icon.image}
                                alt={icon.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm text-gray-300">{icon.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechIconsMarquee;