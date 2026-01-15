import ResumeImg from '../assets/resume.jpg';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/14-lvJo_3afj0Gjcnbkh0fMrNQoXYBVV1/view?usp=sharing'
    }

    return (
        <section id='resume' className='section bg-gradient-to-br from-[#1e1e2e] via-[#2d2d44] to-[#1e1e2e]'>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Resume Image */}
                    <div className='md:w-1/2 flex justify-center'>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform rotate-6 group-hover:rotate-12"></div>
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                <img
                                    className="relative w-full max-w-md rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 z-10 border-4 border-purple-500/30"
                                    src={ResumeImg}
                                    alt="Resume Preview"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className='md:w-1/2 flex justify-center'>
                        <div className='flex flex-col justify-center text-white max-w-2xl'>
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaFilePdf className="text-4xl text-red-400" />
                                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                                        <span className="gradient-text">Resume</span>
                                    </h1>
                                </div>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            </div>

                            <p className='text-lg md:text-xl text-gray-300 mb-8 leading-relaxed'>
                                You can view and download my resume to learn more about my experience, skills, and qualifications. 
                                I'm always open to discussing new opportunities and exciting projects.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={config.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4"
                                >
                                    <FaFilePdf />
                                    View Resume
                                </a>
                                <a
                                    href={config.link}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline flex items-center justify-center gap-3 text-lg px-8 py-4"
                                >
                                    <FaDownload />
                                    Download PDF
                                </a>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20">
                                <h3 className="text-xl font-semibold mb-4 gradient-text">Highlights</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">▹</span>
                                        <span>Full-Stack Development with MERN Stack</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">▹</span>
                                        <span>Mechanical Engineering Background</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">▹</span>
                                        <span>Passionate about Learning New Technologies</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">▹</span>
                                        <span>Ready for Entry-Level Positions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

