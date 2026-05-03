import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiUser, HiArrowRight, HiBell } from 'react-icons/hi';
import { fetchNews } from '../services/api';

const Blog = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(27);
      if (data && data.length > 0) {
        setNews(data);
      }
      setLoading(false);
    };
    getNews();
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Latest <span className="gradient-text">News & Notifications</span></h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Stay updated with the latest school reopenings, academic events, and important announcements.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
      ) : news.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {news.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {item.image_url ? (
                  <img src={item.image_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary-200">
                    <HiBell size={80} />
                  </div>
                )}
                <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-xs font-bold text-primary-600">
                  Notification
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <HiCalendar className="text-primary-500" />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <HiUser className="text-primary-500" />
                    <span>Galaxy Academy</span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors leading-tight line-clamp-2">{item.title}</h3>
                <div 
                  className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-4 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <div className="mt-auto">
                  <button className="text-primary-600 font-bold flex items-center space-x-2 group/btn">
                    <span>Read Full Story</span>
                    <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500 italic">
          No news items found at this time.
        </div>
      )}

      <div className="mt-20 text-center">
        <button className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 px-8 py-4 rounded-2xl font-bold hover:bg-primary-100 transition-colors">
          Subscribe for Updates
        </button>
      </div>
    </div>
  );
};

export default Blog;
