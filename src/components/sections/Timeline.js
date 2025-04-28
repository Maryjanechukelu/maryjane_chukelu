// components/sections/Timeline.js
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ year, title, company, description, isLeft = true }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };
  
  return (
    <div className="mb-12 flex justify-between items-center w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className={`flex w-full ${isLeft ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'} md:w-1/2`}
      >
        <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 w-full">
          <span className="inline-block px-3 py-1 bg-purple-800/70 text-purple-200 text-xs rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <h4 className="text-purple-300 text-sm mb-3">{company}</h4>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Center Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-fuchsia-500 rounded"></div>
      
      {/* Timeline Items */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <TimelineItem 
            key={index}
            {...experience}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;