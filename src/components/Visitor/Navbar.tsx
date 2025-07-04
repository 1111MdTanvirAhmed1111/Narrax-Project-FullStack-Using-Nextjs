'use client'
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Home, Swords, Trophy, Users, HelpCircle, User } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Battles', href: '/battles', icon: Swords },
  { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Support', href: '/support', icon: HelpCircle },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      // GSAP animation for navbar entrance
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });

      // GSAP animation for nav links on hover
      gsap.utils.toArray<HTMLElement>('.nav-link').forEach((link) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(link, {
          scale: 1.1,
          rotate: 3,
          color: '#d8b4fe', // purple-400
          duration: 0.3,
          ease: 'power2.out',
        }).to(link.querySelector('.nav-icon'), {
          rotate: 360,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        }, 0);

        link.addEventListener('mouseenter', () => tl.play());
        link.addEventListener('mouseleave', () => tl.reverse());
      });
    }

    // GSAP animation for mobile menu toggle
    if (isOpen) {
      gsap.fromTo(
        '.mobile-menu',
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav  className="navbar sticky top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black border-b border-red-900/30 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 hover:scale-105 transition-all duration-300">
                NARRAX
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div ref={navRef} className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="nav-link flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 group"
              >
                <link.icon className="nav-icon w-5 h-5 mr-2 group-hover:scale-110 group-hover:text-purple-400 transition-transform duration-300" />
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>

          {/* Profile Button */}
          <div className="hidden md:flex">
            <Link href="/signin">
              <button className="group bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50">
                <User className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-purple-400 focus:outline-none transition-all duration-300 p-2 rounded-full hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6 animate-spin" /> : <Menu className="w-6 h-6 group-hover:animate-pulse" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu md:hidden overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="nav-link flex items-center text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 group"
                  onClick={toggleMenu}
                >
                  <link.icon className="nav-icon w-5 h-5 mr-2 group-hover:scale-110 group-hover:text-purple-400 transition-transform duration-300" />
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
              <Link
                href="/profile"
                className="block w-full text-left px-3 py-2"
                onClick={toggleMenu}
              >
                <button className="group bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full w-full text-left transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  <User className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;