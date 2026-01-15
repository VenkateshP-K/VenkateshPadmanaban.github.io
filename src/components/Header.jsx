import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setToggleMenu(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-[rgba(30,30,46,0.95)] backdrop-blur-md shadow-2xl py-3' 
                : 'bg-transparent py-4'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#home" className="font-bold text-2xl md:text-3xl gradient-text hover:scale-105 transition-transform duration-300">
                    VP
                </a>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href}
                                    className="px-4 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 relative group"
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setToggleMenu(!toggleMenu)} 
                    className='block md:hidden text-white hover:text-purple-400 transition-colors z-50 p-2'
                    aria-label="Toggle menu"
                >
                    {toggleMenu ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="md:hidden fixed top-16 left-0 right-0 bg-[rgba(17,24,39,0.98)] backdrop-blur-md shadow-2xl animate-slideDown border-t border-white/10">
                    <ul className="flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-white/5">
                                <a 
                                    href={link.href}
                                    className="block w-full text-center py-4 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300"
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

