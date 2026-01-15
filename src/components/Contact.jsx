import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Contact() {
    const config = {
        email: 'venkateshpk06@gmail.com',
        phone: '+91 9080942372',
        github: 'https://github.com/VenkateshP-K',
        linkedin: 'https://www.linkedin.com/in/venkatesh-p-fsd'
    }

    const contactMethods = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: config.email,
            link: `mailto:${config.email}`,
            color: 'text-red-400'
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: config.phone,
            link: `tel:${config.phone}`,
            color: 'text-green-400'
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: 'VenkateshP-K',
            link: config.github,
            color: 'text-gray-300'
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'venkatesh-p-fsd',
            link: config.linkedin,
            color: 'text-blue-400'
        }
    ];

    return (
        <section id='contact' className='section bg-gradient-to-br from-[#0a0a0f] via-[#1e1e2e] to-[#0a0a0f] text-white'>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">Get In Touch</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        If you want to discuss more in detail, please feel free to contact me. I'm always open to new opportunities and exciting projects.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {contactMethods.map((method, index) => {
                        const IconComponent = method.icon;
                        return (
                            <a
                                key={index}
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : undefined}
                                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group relative p-6 bg-gradient-to-br from-[#1e1e2e] to-[#2d2d44] rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 card-hover"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`mb-4 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${method.color}`}>
                                        <IconComponent className="text-3xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-white">
                                        {method.label}
                                    </h3>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors break-all">
                                        {method.value}
                                    </p>
                                </div>
                                
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                            </a>
                        );
                    })}
                </div>

                {/* Contact Form Section */}
                {/* <div className="max-w-2xl mx-auto mt-16">
                    <div className="p-8 md:p-12 bg-gradient-to-br from-[#1e1e2e] to-[#2d2d44] rounded-3xl border border-purple-500/20 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-6 gradient-text text-center">
                            Send me a message
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-primary text-lg py-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div> */}

                {/* Footer Note */}
                <div className="text-center mt-12 text-gray-400">
                    <p>Looking forward to hearing from you! 🚀</p>
                </div>
            </div>
        </section>
    )
}

