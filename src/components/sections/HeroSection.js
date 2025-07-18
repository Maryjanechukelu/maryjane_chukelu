import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const bgRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Your existing parallax effect code...
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control text sequence
  useEffect(() => {
    const timers = [];
    
    // Show first text immediately
    timers.push(setTimeout(() => setCurrentTextIndex(0), 500));
    
    // Show second text after 3 seconds
    timers.push(setTimeout(() => setCurrentTextIndex(1), 3500));
    
    // Show third text after 6 seconds
    timers.push(setTimeout(() => setCurrentTextIndex(2), 6500));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Your existing animation variants...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const textLines = [
    { text: "Crafting digital", className: "block" },
    { text: "experiences that", className: "block" },
    { text: "make an impact", className: "block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text" }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Your existing background code... */}
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-30 -z-10">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="b" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="#6d28d9" />
                <stop offset="100%" stopColor="#c026d3" />
              </linearGradient>
              <clipPath id="a">
                <path fill="currentColor" d="M854.5 385q-81.5 385-311.5 422T232 626.5q-80-281.5 14-427T554.5 112q216 134.5 300 273Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)">
              <path fill="url(#b)" d="M854.5 385q-81.5 385-311.5 422T232 626.5q-80-281.5 14-427T554.5 112q216 134.5 300 273Z" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <p className="inline-block text-purple-300 font-medium mb-4 bg-purple-500/10 px-4 py-1 rounded-full">
                <span className="animate-pulse mr-2">•</span> Full-Stack Developer
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight space-y-2">
                {textLines.map((line, index) => (
                  <span key={index} className={line.className}>
                    {currentTextIndex >= index ? (
                      <AnimatedText
                        text={line.text}
                        tag="span"
                        speed={120}
                        loop={false} // Add this prop to your AnimatedText if you have it
                      />
                    ) : (
                      <span className="opacity-0">|</span> // Placeholder to maintain height
                    )}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Rest of your existing code... */}
            <motion.div variants={itemVariants}>
              <p className="text-purple-100/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                I&apos;m a passionate developer specializing in creating beautiful, functional,
                and user-friendly web applications using cutting-edge technologies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 md:mb-0">
              <Button href="/projects" size="lg" icon={<ArrowRight size={18} />}>
                View My Work
              </Button>
              <Button href="/contact" variant="secondary" size="lg" outline>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Your existing image/visual code... */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative order-first lg:order-last"
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse">
                <Image
                  src="/cybergirl1.jpg"
                  alt="Developer"
                  fill
                  priority
                  className="object-fit"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Your existing scroll indicator... */}
      <motion.div
        className="hidden md:absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-purple-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};