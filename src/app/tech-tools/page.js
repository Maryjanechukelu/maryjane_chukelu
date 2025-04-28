"use client"
import Head from 'next/head';
import { useState } from 'react';
import TechIconsMarquee from '@/components/sections/TechIconsMarquee';

// Sample tech stack data - replace with your actual tech stack
const techCategories = {
  "Frontend": [
    { name: "React", image: "/icons/react.svg" },
    { name: "Next.js", image: "/icons/nextjs.svg" },
    { name: "Tailwind CSS", image: "/icons/tailwind.svg" },
    { name: "TypeScript", image: "/icons/typescript.svg" },
    { name: "JavaScript", image: "/icons/javascript.svg" },
    { name: "HTML5", image: "/icons/html5.svg" },
    { name: "CSS3", image: "/icons/css3.svg" },
    { name: "Redux", image: "/icons/redux.svg" },
    { name: "Framer Motion", image: "/icons/framer.svg" },
  ],
  "Backend": [
    { name: "Node.js", image: "/icons/nodejs.svg" },
    { name: "Express", image: "/icons/express.svg" },
    { name: "MongoDB", image: "/icons/mongodb.svg" },
    { name: "PostgreSQL", image: "/icons/postgresql.svg" },
    { name: "Firebase", image: "/icons/firebase.svg" },
    { name: "Prisma", image: "/icons/prisma.svg" },
    { name: "GraphQL", image: "/icons/graphql.svg" },
    { name: "REST API", image: "/icons/api.svg" },
  ],
  "Tools": [
    { name: "Git", image: "/icons/git.svg" },
    { name: "GitHub", image: "/icons/github.svg" },
    { name: "VS Code", image: "/icons/vscode.svg" },
    { name: "Docker", image: "/icons/docker.svg" },
    { name: "Figma", image: "/icons/figma.svg" },
    { name: "Jira", image: "/icons/jira.svg" },
    { name: "Vercel", image: "/icons/vercel.svg" },
    { name: "Netlify", image: "/icons/netlify.svg" },
  ],
  "Testing": [
    { name: "Jest", image: "/icons/jest.svg" },
    { name: "React Testing Library", image: "/icons/testinglibrary.svg" },
    { name: "Cypress", image: "/icons/cypress.svg" },
    { name: "Storybook", image: "/icons/storybook.svg" },
  ],
};

export default function TechTools() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const categories = Object.keys(techCategories);
  
  return (
    <>
      <Head>
        <title>Tech Stack | Your Name</title>
        <meta name="description" content="Technologies and tools I use in my development workflow" />
      </Head>
      
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              My Tech Stack
            </h1>
            <p className="text-lg text-gray-300">
              The technologies, tools, and platforms I use to bring ideas to life.
              This stack allows me to build efficient, scalable, and beautiful web applications.
            </p>
          </div>
          
          {/* Tech Categories */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-3">
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
          
          {/* Tech Icons Marquee */}
          <div className="mb-16">
            <TechIconsMarquee 
              icons={techCategories[activeCategory]} 
              direction={activeCategory === 'Backend' ? 'right' : 'left'}
              speed="medium"
            />
          </div>
          
          {/* Tech Details */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-purple-300 mb-6">
                Why I Use These {activeCategory} Technologies
              </h2>
              
              <div className="prose prose-invert max-w-none">
                {activeCategory === 'Frontend' && (
                  <p className="text-gray-300">
                    My frontend stack is built around React and Next.js, providing a perfect balance of performance, developer experience, and SEO capabilities. I leverage Tailwind CSS for rapid styling with a utility-first approach, and add animations with Framer Motion to create delightful user experiences. TypeScript ensures type safety and improves code quality across complex applications.
                  </p>
                )}
                
                {activeCategory === 'Backend' && (
                  <p className="text-gray-300">
                    For backend development, I rely on Node.js and Express to build robust APIs and server-side applications. I&apos;m comfortable working with both SQL databases like PostgreSQL and NoSQL solutions like MongoDB, choosing the right tool depending on the project&apos;s needs. For database management, I use Prisma as my ORM to maintain clean data access patterns. GraphQL offers flexible data querying when appropriate.
                  </p>
                )}
                
                {activeCategory === 'Tools' && (
                  <p className="text-gray-300">
                    My development workflow is streamlined with tools that enhance productivity and collaboration. Git and GitHub form the foundation of my version control system, while VS Code provides a powerful editing environment. Docker helps with consistent development environments and deployments. For design work, I use Figma to create mockups and prototypes before implementation.
                  </p>
                )}
                
                {activeCategory === 'Testing' && (
                  <p className="text-gray-300">
                    I believe in thorough testing to ensure reliability and maintainability. Jest serves as my primary testing framework for unit and integration tests, complemented by React Testing Library for component testing with a user-centric approach. For end-to-end testing, I use Cypress to verify complete user flows. Storybook helps me develop and test UI components in isolation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Level */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-purple-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">My Learning Philosophy</h2>
            <p className="text-lg text-gray-300 mb-8">
              Technology evolves rapidly, and I&apos;m committed to continuous learning and improvement.
              I regularly explore new tools and techniques, attend workshops, and contribute to open-source
              projects to stay current with the latest developments in web technology.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}