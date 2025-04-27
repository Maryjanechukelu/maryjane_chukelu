// components/sections/ProjectCard.js
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import Button from '../ui/Button';

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  codeUrl,
  featured = false,
  onOpenModal = null,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleModalOpen = () => {
    if (onOpenModal) {
      onOpenModal({
        title,
        description,
        image,
        tags,
        demoUrl,
        codeUrl
      });
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  // Render differently for featured projects vs. regular grid items
  if (featured) {
    return (
      <motion.div 
        className="relative bg-purple-900/20 backdrop-blur-md border border-purple-500/20 rounded-xl overflow-hidden"
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent md:bg-gradient-to-r md:from-purple-900/80 md:to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            
            <p className="text-purple-100/70 mb-6">{description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-auto">
              {demoUrl && (
                <Button 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  icon={<ExternalLink size={16} />}
                  size="sm"
                >
                  Live Demo
                </Button>
              )}
              
              {codeUrl && (
                <Button 
                  href={codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  icon={<Github size={16} />}
                  variant="secondary"
                  size="sm"
                >
                  Source Code
                </Button>
              )}
              
              {onOpenModal && (
                <Button 
                  onClick={handleModalOpen}
                  icon={<Maximize2 size={16} />}
                  variant="secondary"
                  size="sm"
                >
                  Details
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Regular project card
  return (
    <motion.div 
      className="relative bg-purple-900/20 backdrop-blur-md border border-purple-500/20 rounded-lg overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        
        <p className="text-purple-100/70 text-sm mb-4 line-clamp-3">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="bg-purple-500/20 text-purple-300 text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-purple-300 text-xs">+{tags.length - 3} more</span>
          )}
        </div>
        
        <div className="flex gap-2 mt-2">
          {demoUrl && (
            <Button 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              icon={<ExternalLink size={14} />}
              size="sm"
              variant="secondary"
            >
              Demo
            </Button>
          )}
          
          {codeUrl && (
            <Button 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              icon={<Github size={14} />}
              variant="secondary"
              size="sm"
            >
              Code
            </Button>
          )}
          
          {onOpenModal && (
            <Button 
              onClick={handleModalOpen}
              icon={<Maximize2 size={14} />}
              variant="secondary"
              size="sm"
              className="ml-auto"
            >
              Details
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;