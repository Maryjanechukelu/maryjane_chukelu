"use client"
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success!
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Head>
        <title>Contact | Your Name</title>
        <meta name="description" content="Get in touch with me for work inquiries or collaboration" />
      </Head>
      
      <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                            Get In Touch
                        </h1>
                        <p className="text-lg text-gray-300">
                            Have a project in mind or want to collaborate? Feel free to reach out
                            using the form below or contact me directly.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Contact Info */}
                            <div className="md:col-span-1">
                                <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 h-full">
                                    <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-3">
                                                <Mail className="w-5 h-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-300 mb-1">Email</h3>
                                                <a
                                                    href="mailto:hello@yourname.com"
                                                    className="text-purple-300 hover:text-purple-200 transition-colors"
                                                >
                                                    hello@yourname.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-3">
                                                <Phone className="w-5 h-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-300 mb-1">Phone</h3>
                                                <a
                                                    href="tel:+11234567890"
                                                    className="text-purple-300 hover:text-purple-200 transition-colors"
                                                >
                                                    +1 (123) 456-7890
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-3">
                                                <MapPin className="w-5 h-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-300 mb-1">Location</h3>
                                                <p className="text-white">San Francisco, CA</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-lg font-medium text-white mb-4">Follow Me</h3>
                                        <div className="flex space-x-4">
                                            <a
                                                href="https://github.com/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://linkedin.com/in/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://twitter.com/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                                                aria-label="Twitter"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="md:col-span-2">
                                <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                                    <h2 className="text-xl font-bold text-white mb-6">Send Me a Message</h2>

                                    {submitStatus === 'success' && (
                                        <div className="bg-green-900/30 border border-green-500/30 text-green-200 rounded-lg p-4 mb-6 flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Thank you for your message! I&apos;ll get back to you soon.</span>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="bg-red-900/30 border border-red-500/30 text-red-200 rounded-lg p-4 mb-6 flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>Oops! Something went wrong. Please try again later.</span>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'
                                                        } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
                                                    placeholder="Your name"
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'
                                                        } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
                                                    placeholder="your.email@example.com"
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                className={`w-full bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-700'
                                                    } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
                                                placeholder="What's this about?"
                                            />
                                            {errors.subject && (
                                                <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                                            )}
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                rows="5"
                                                className={`w-full bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'
                                                    } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none`}
                                                placeholder="Tell me about your project, timeline, and budget..."
                                            ></textarea>
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                            )}
                                        </div>

                                        <div className="text-right">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium inline-flex items-center ${isSubmitting
                                                        ? 'opacity-70 cursor-not-allowed'
                                                        : 'hover:from-purple-700 hover:to-fuchsia-700'
                                                    } transition-all shadow-lg hover:shadow-purple-500/20`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={18} className="ml-2" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}