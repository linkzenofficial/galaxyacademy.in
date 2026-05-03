import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHome } from 'react-icons/hi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[150px] font-black text-primary-500/20 leading-none">404</h1>
          <h2 className="text-4xl font-bold -mt-16 mb-6">Lost in Space?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved to a different galaxy.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary-500/20 transform hover:-translate-y-1"
          >
            <HiHome size={20} />
            <span>Back to Safety</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
