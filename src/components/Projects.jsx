import { useState } from 'react';
import websiteImg1 from '../assets/hotel_booking.webp';
import websiteImg2 from '../assets/library.png';
import websiteImg3 from '../assets/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png';
import websiteImg4 from '../assets/travelplannermockupwhitebackground_1_-10.webp';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const config = {
        projects: [
            {
                id: 1,
                image: websiteImg4,
                title: 'Travel Planner App',
                description: 'A comprehensive Travel Planner App built with React and Bootstrap for frontend, Node.js and Express for backend, and MongoDB for database. Features include trip planning, itinerary management, and user authentication.',
                link: 'https://travel-planner-pk03.netlify.app/',
                gitFe: 'https://github.com/VenkateshP-K/Trip_Planner_FE',
                gitBe: 'https://github.com/VenkateshP-K/Trip_Planner_BE',
                tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap']
            },
            {
                id: 2,
                image: websiteImg3,
                title: 'Todo Application',
                description: 'A feature-rich Todo App built with React and Bootstrap for frontend, Node.js and Express for backend, and MongoDB for database. Includes task management, categories, and real-time updates.',
                link: 'https://simple-todo-vp.netlify.app/',
                gitFe: 'https://github.com/VenkateshP-K/todo_fe',
                gitBe: 'https://github.com/VenkateshP-K/todo_be',
                tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap']
            },
            {
                id: 3,
                image: websiteImg2,
                title: 'Library Management System',
                description: 'A complete Library Management System built with React and Bootstrap for frontend, Node.js and Express for backend, and MongoDB for database. Manages books, members, and transactions.',
                link: 'https://library-management-pk.netlify.app/',
                gitFe: 'https://github.com/VenkateshP-K/library_management_FE',
                gitBe: 'https://github.com/VenkateshP-K/library_management_system_BE',
                tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap']
            },
            {
                id: 4,
                image: websiteImg1,
                title: 'Hotel Booking Website',
                description: 'A modern Hotel Booking Website built with React and Bootstrap for frontend, Node.js and Express for backend, and MongoDB for database. Features room booking, availability checking, and payment integration.',
                link: 'https://hotelbooking-demo.netlify.app/',
                gitFe: 'https://github.com/VenkateshP-K/Hotel_booking_FE',
                gitBe: 'https://github.com/VenkateshP-K/Hotel_booking_be',
                tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap']
            },
        ]
    }

    return (
        <section id='projects' className="section bg-gradient-to-br from-[#0a0a0f] via-[#1e1e2e] to-[#0a0a0f] text-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">My Projects</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        These are some of my best projects. I have built these with React, MERN stack, and modern CSS frameworks. Check them out.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {config.projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e1e2e] to-[#2d2d44] border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 card-hover"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    className={`w-full h-full object-cover transition-transform duration-500 ${
                                        hoveredProject === project.id ? 'scale-110' : 'scale-100'
                                    }`}
                                    src={project.image}
                                    alt={project.title}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-[#1e1e2e] via-transparent to-transparent transition-opacity duration-300 ${
                                    hoveredProject === project.id ? 'opacity-100' : 'opacity-60'
                                }`}></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaCode className="text-purple-400" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    {/* <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary flex items-center gap-2 text-sm"
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </a> */}
                                    <a
                                        href={project.gitFe}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline flex items-center gap-2 text-sm"
                                    >
                                        <FaGithub />
                                        Frontend
                                    </a>
                                    <a
                                        href={project.gitBe}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline flex items-center gap-2 text-sm"
                                    >
                                        <FaGithub />
                                        Backend
                                    </a>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 pointer-events-none transition-opacity duration-300 ${
                                hoveredProject === project.id ? 'opacity-20' : 'opacity-0'
                            }`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

