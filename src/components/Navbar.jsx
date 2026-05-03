import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/services' },
    { name: 'Admission', path: '/admission' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center p-1"
              >
                <img src="/logo.png" alt="Galaxy Academy Logo" className="w-full h-full object-contain" />
              </motion.div>
              <div className="absolute inset-0 bg-primary-500/10 blur-2xl rounded-full -z-10 group-hover:bg-primary-500/20 transition-colors" />
            </div>
            <div className="flex items-center">
              <span className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter leading-none whitespace-nowrap ${scrolled || isDarkMode ? 'text-gray-900 dark:text-white' : 'text-gray-900'}`}>
                GALAXY <span className="text-primary-500">ACADEMY</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition-colors hover:text-primary-500 ${
                  location.pathname === link.path ? 'text-primary-500' : isDarkMode || scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-700'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <HiOutlineSun className="w-6 h-6" /> : <HiOutlineMoon className="w-6 h-6" />}
            </button>
            <a 
              href="https://galaxyacademy.in/authentication" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-primary-500/25"
            >
              Login
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full">
              {isDarkMode ? <HiOutlineSun className="w-6 h-6" /> : <HiOutlineMoon className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <HiX className="w-8 h-8 text-primary-500" /> : <HiMenuAlt3 className="w-8 h-8 text-primary-500" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-100 dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-medium ${
                    location.pathname === link.path ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a 
                  href="https://galaxyacademy.in/authentication" 
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center bg-primary-600 text-white py-3 rounded-xl font-semibold"
                >
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
