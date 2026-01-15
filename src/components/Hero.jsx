import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi";
import { FaCode, FaRocket } from "react-icons/fa";

export default function Hero() {
    const config = {
        subtitle: 'Full-Stack Developer',
        description: 'Passionate about creating innovative web solutions and bringing ideas to life through code',
        social: {
            github: 'https://github.com/VenkateshP-K',
            linkedin: 'https://www.linkedin.com/in/venkatesh-p-fsd',
            whatsapp: 'https://wa.me/919080942372'
        }
    }

    return (
        <section id="home" className='min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-32 bg-gradient-to-br from-[#0a0a0f] via-[#1e1e2e] to-[#2d2d44] relative overflow-hidden'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className='md:w-1/2 flex flex-col z-10 relative'>
                <div className="mb-4 flex items-center gap-2">
                    <span className="text-purple-400 font-semibold text-lg md:text-xl">Hello, I'm</span>
                    <FaCode className="text-purple-400 animate-pulse" />
                </div>
                
                <h1 className='text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight'>
                    <span className='gradient-text'>
                        Venkatesh
                    </span>
                </h1>
                
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold mb-6 flex items-center gap-3'>
                    {config.subtitle}
                    <FaRocket className="text-pink-400 animate-bounce" />
                </h2>
                
                <p className='text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed'>
                    {config.description}
                </p>
                
                <div className='flex items-center space-x-6 mb-12'>
                    <a 
                        href={config.social.github} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="group relative p-3 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:bg-white/10 rounded-full backdrop-blur-sm"
                        aria-label="GitHub Profile"
                    >
                        <AiOutlineGithub size={32} />
                        <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                            GitHub
                        </span>
                    </a>
                    <a 
                        href={config.social.linkedin} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="group relative p-3 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:bg-white/10 rounded-full backdrop-blur-sm"
                        aria-label="LinkedIn Profile"
                    >
                        <AiOutlineLinkedin size={32} />
                        <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                            LinkedIn
                        </span>
                    </a>
                    <a
                        href={config.social.whatsapp}
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="group relative p-3 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:bg-white/10 rounded-full backdrop-blur-sm"
                        aria-label="WhatsApp Chat"
                    >
                        <AiOutlineWhatsApp size={32} />
                        <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                            WhatsApp
                        </span>
                    </a>
                    
                </div>
                
                <a 
                    href="#about" 
                    className="inline-flex items-center text-white hover:text-purple-400 transition-colors duration-300 group w-fit"
                >
                    <span className="mr-2 font-medium">Explore my work</span>
                    <HiArrowDown size={24} className="animate-bounce group-hover:animate-pulse" />
                </a>
            </div>
            
            <div className='md:w-1/2 flex justify-center items-center z-10 mt-12 md:mt-0'>
                <div className="relative">
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20"></div>
                    
                    {/* Image container */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
                        <img 
                            className="relative w-64 md:w-80 lg:w-96 rounded-full border-4 border-purple-500/50 shadow-2xl transform hover:scale-105 transition-transform duration-500 z-10"
                            src={HeroImg} 
                            alt="Venkatesh Padmanaban"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

