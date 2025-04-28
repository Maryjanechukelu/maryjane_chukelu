// pages/skills.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import SkillCard from '../components/sections/SkillCard';
import { 
  Code, 
  Database, 
  Layout, 
  Figma, 
  Server, 
  Globe, 
  Cpu, 
  Terminal
} from 'lucide-react';

// Sample skills data - replace with your actual skills
const skillsData = {
  "Frontend": [
    {
      title: "React.js",
      description: "Building interactive UIs with React and its ecosystem including Redux, React Router, and Styled Components.",
      icon: Code,
      level: 95,
      color: "purple"
    },
    {
      title: "Next.js",
      description: "Creating static and server-rendered applications with Next.js, focusing on performance and SEO.",
      icon: Code,
      level: 90,
      color: "purple"
    },
    {
      title: "CSS & Tailwind",
      description: "Crafting responsive designs with modern CSS, including flexbox, grid, and utility-first frameworks like Tailwind.",
      icon: Layout,
      level: 95,
      color: "purple"
    },
    {
      title: "JavaScript",
      description: "Proficient in ES6+ features, asynchronous programming, and modern JavaScript patterns.",
      icon: Code,
      level: 90,
      color: "purple"
    }
  ],
  "Backend": [
    {
      title: "Node.js",
      description: "Building scalable server-side applications with Node.js, Express, and related technologies.",
      icon: Server,
      level: 85,
      color: "fuchsia"
    },
    {
      title: "Databases",
      description: "Working with SQL and NoSQL databases like PostgreSQL, MongoDB, and Firebase.",
      icon: Database,
      level: 80,
      color: "fuchsia"
    },
    {
      title: "API Development",
      description: "Designing and implementing RESTful APIs and GraphQL services for web applications.",
      icon: Globe,
      level: 85,
      color: "fuchsia"
    },
    {
      title: "Authentication",
      description: "Implementing secure user authentication flows with JWT, OAuth, and other standards.",
      icon: Terminal,
      level: 80,
      color: "fuchsia"
    }
  ],
  "Design & Other": [
    {
      title: "UI/UX Design",
      description: "Creating user-centered designs with a focus on usability, accessibility, and aesthetics.",
      icon: Figma,
      level: 80,
      color: "indigo"
    },
    {
      title: "DevOps",
      description: "Setting up CI/CD pipelines, containerization with Docker, and deployment strategies.",
      icon: Cpu,
      level: 75,
      color: "indigo"
    },
    {
      title: "Testing",
      description: "Writing unit and integration tests with Jest, React Testing Library, and Cypress.",
      icon: Terminal,
      level: 85,
      color: "indigo"
    },
    {
      title: "Version Control",
      description: "Using Git for version control, including branching strategies and collaborative workflows.",
      icon: Code,
      level: 90,
      color: "indigo"
    }
  ]
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [isLoading, setIsLoading] = useState(true);

  const categories = Object.keys(skillsData);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <>
      <Head>
        <title>Skills | Your Name</title>
        <meta name="description" content="Showcase of my technical skills and expertise" />
      </Head>
      
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-lg text-gray-300">
              My technical skills and professional expertise developed over years of
              working on various projects and continuous learning.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20' 
                      : 'bg-purple-900/30 text-gray-300 hover:bg-purple-800/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="w-full max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                key={activeCategory} // Force animation to restart when category changes
              >
                {skillsData[activeCategory].map((skill) => (
                  <motion.div key={skill.title} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Skill Level Legend */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-purple-300 mb-6 text-center">Skill Level Reference</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-white mb-2">Beginner (0-25%)</h3>
                <p className="text-xs text-gray-400">Familiar with basic concepts but limited practical experience.</p>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-white mb-2">Intermediate (26-50%)</h3>
                <p className="text-xs text-gray-400">Can work independently on simpler tasks but may need guidance on complex ones.</p>
              </div> 
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-white mb-2">Advanced (51-75%)</h3>
                <p className="text-xs text-gray-400">Comfortable working independently and solving difficult problems.</p>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-white mb-2">Expert (76-100%)</h3>
                <p className="text-xs text-gray-400">Deep knowledge and extensive experience. Can tackle complex challenges with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}