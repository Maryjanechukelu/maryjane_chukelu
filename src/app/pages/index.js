// pages/index.js
import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/sections/HeroSection';
import ProjectCard from '../components/sections/ProjectCard';
import SkillCard from '../components/sections/SkillCard';
import { Code, Figma, Database } from 'lucide-react';

const featuredProjects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js, Node.js, and MongoDB. Features real-time updates, user authentication, and responsive design.",
    image: "/images/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with a custom CMS for managing products, orders, and customer data. Built with React, Express, and PostgreSQL.",
    image: "/images/project2.jpg",
    tags: ["React", "Express", "PostgreSQL", "Redux"],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two.vercel.app"
  }
];

const featuredSkills = [
  {
    title: "Frontend Development",
    description: "Building responsive and accessible user interfaces with modern frameworks and CSS solutions.",
    icon: Code,
    level: 90,
    color: "purple"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive user experiences with focus on usability, aesthetics, and user-centered design.",
    icon: Figma,
    level: 85,
    color: "fuchsia"
  },
  {
    title: "Backend Development",
    description: "Developing scalable server-side applications and RESTful APIs for web services.",
    icon: Database,
    level: 80,
    color: "indigo"
  }
];

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const childVariants = {
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
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={sectionVariants}
            className="mb-16"
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto"></div>
            </div>
            
            <div className="space-y-32">
              {featuredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  {...project} 
                  index={index} 
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/projects" 
                className="px-6 py-3 border border-purple-400 rounded-lg text-purple-300 hover:bg-purple-500/10 transition-colors inline-flex items-center"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
          
          {/* Skills Section */}
          <motion.div
            animate={controls}
            initial="hidden"
            variants={sectionVariants}
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                Core Skills
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto"></div>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerChildrenVariants}
            >
              {featuredSkills.map((skill) => (
                <motion.div key={skill.title} variants={childVariants}>
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <Link 
                href="/skills" 
                className="px-6 py-3 border border-purple-400 rounded-lg text-purple-300 hover:bg-purple-500/10 transition-colors inline-flex items-center"
              >
                Explore All Skills
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work Together?</h2>
            <p className="text-lg text-gray-300 mb-8">
              I&apos;m currently available for freelance work and exciting new opportunities.
              Let&apos;s create something amazing together!
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg font-medium inline-flex items-center hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-purple-500/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}