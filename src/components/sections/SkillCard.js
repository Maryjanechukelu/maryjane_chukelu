// components/sections/SkillCard.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillCard = ({ name, icon: Icon, level, category, description, index }) => {
  // Skill level visualization
  const skillLevels = [
    { level: 'Beginner', color: 'bg-purple-500/30' },
    { level: 'Intermediate', color: 'bg-purple-500/50' },
    { level: 'Advanced', color: 'bg-purple-500/70' },
    { level: 'Expert', color: 'bg-purple-500' }
  ];
  
  // Find matching level
  const currentLevel = skillLevels.findIndex(skill => skill.level === level);
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  return (
    <motion.div
      className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-5 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
    >
      <div className="flex items-center mb-4">
        {/* Icon */}
        <div className="relative h-10 w-10 mr-3 flex-shrink-0 bg-purple-500/10 rounded-lg p-2">
          {Icon && (
            <Image
              src= "/"
              alt= "Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          )}
        </div>
        
        <div>
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-xs text-purple-300/70">{category}</p>
        </div>
      </div>
      
      {/* Description */}
      {description && (
        <p className="text-sm text-purple-100/70 mb-4">{description}</p>
      )}
      
      {/* Skill level bars */}
      <div className="flex gap-1 mt-2">
        {skillLevels.map((skill, i) => (
          <div 
            key={i} 
            className={`h-1.5 flex-1 rounded-full ${i <= currentLevel ? skill.color : 'bg-purple-500/10'}`} 
          />
        ))}
      </div>
      
      {/* Skill level text */}
      <div className="mt-2 text-right">
        <span className="text-xs text-purple-300/70">{level}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;