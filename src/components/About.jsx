import AboutImg from '../assets/about.png';
import { FaReact, FaNode, FaDatabase, FaCode } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

export default function About() {
    const config = {
        line1: 'Hi, My name is Venkatesh. I am a Full-Stack Web Developer looking for an entry-level position.',
        line2: 'I am passionate about learning new technologies and currently mastering the MERN stack.',
        line3: "I'm confident that my mechanical engineering background adds a unique perspective, especially when working on projects involving physical systems and real-world applications."
    }

    const skills = [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNode, color: 'text-green-400' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'HTML/CSS', icon: FaCode, color: 'text-orange-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Database Design', icon: FaDatabase, color: 'text-blue-500' }
    ];

    return (
        <section className='section bg-gradient-to-br from-[#1e1e2e] via-[#2d2d44] to-[#1e1e2e]' id='about'>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Section */}
                    <div className='md:w-1/2 flex justify-center'>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform rotate-6 group-hover:rotate-12"></div>
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                <img 
                                    src={AboutImg} 
                                    alt="About Venkatesh"
                                    className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 z-10"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className='md:w-1/2 flex justify-center'>
                        <div className='flex flex-col justify-center text-white max-w-2xl'>
                            <div className="mb-8">
                                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
                                    <span className="gradient-text">
                                        About Me
                                    </span>
                                </h1>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            </div>
                            
                            <div className="space-y-6 mb-8">
                                <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                                    {config.line1}
                                </p>
                                <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                                    {config.line2}
                                </p>
                                <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
                                    {config.line3}
                                </p>
                            </div>
                            
                            <div className="mt-6">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
                                    Skills & Technologies
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {skills.map((skill, index) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                                            >
                                                <div className="flex flex-col items-center gap-2">
                                                    <IconComponent className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

