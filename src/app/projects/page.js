"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProjectCard from '@/components/sections/ProjectCard';

// Sample projects data - replace with your own projects
const allProjects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js, Node.js, and MongoDB. Features real-time updates, user authentication, and responsive design.",
    image: "/images/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Full Stack"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with a custom CMS for managing products, orders, and customer data. Built with React, Express, and PostgreSQL.",
    image: "/images/project2.jpg",
    tags: ["React", "Express", "PostgreSQL", "Full Stack"],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two.vercel.app"
  },
  {
    title: "Personal Blog",
    description: "A statically generated blog built with Next.js and MDX for content management. Features code syntax highlighting and responsive design.",
    image: "/images/project3.jpg",
    tags: ["Next.js", "MDX", "Frontend"],
    githubUrl: "https://github.com/yourusername/blog",
    liveUrl: "https://my-blog.vercel.app"
  },
  {
    title: "Task Manager API",
    description: "A RESTful API for managing tasks and projects. Built with Node.js, Express, and MongoDB. Features user authentication and authorization.",
    image: "/images/project4.jpg",
    tags: ["Node.js", "Express", "MongoDB", "Backend"],
    githubUrl: "https://github.com/yourusername/task-api",
    liveUrl: null
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts for multiple locations. Uses OpenWeatherMap API and geolocation.",
    image: "/images/project5.jpg",
    tags: ["React", "APIs", "Frontend"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-dashboard.vercel.app"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS. Features responsive design and subtle animations.",
    image: "/images/project6.jpg",
    tags: ["Next.js", "Tailwind CSS", "Frontend"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://myportfolio.vercel.app"
  }
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  
  // Get unique tags for filter
  const allTags = ['All', ...new Set(allProjects.flatMap(project => project.tags))];
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      if (filter === 'All') {
        setProjects(allProjects);
      } else {
        const filtered = allProjects.filter(project => 
          project.tags.includes(filter)
        );
        setProjects(filtered);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filter]);
  
  return (
    <>
      <Head>
        <title>Projects | Your Name</title>
        <meta name="description" content="Showcase of my personal and professional projects" />
      </Head>
      
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg text-gray-300">
              A collection of my recent work and personal projects. 
              Each project is a unique piece of development.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    filter === tag 
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' 
                      : 'bg-purple-900/30 text-gray-300 hover:bg-purple-800/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="w-full max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : projects.length > 0 ? (
              <div className="space-y-32">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    {...project} 
                    index={index} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-gray-400">No projects match the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}