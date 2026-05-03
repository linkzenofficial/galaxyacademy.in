import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiZoomIn, HiPhotograph, HiCollection } from 'react-icons/hi';
import { fetchGallery } from '../services/api';

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGallery = async () => {
      const data = await fetchGallery(27);
      if (data && data.length > 0) {
        setAlbums(data);
      }
      setLoading(false);
    };
    getGallery();
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Academy <span className="gradient-text">Gallery</span></h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Explore the memorable moments, events, and academic life at Galaxy Academy through our visual collections.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
      ) : selectedAlbum ? (
        // Album View
        <div>
          <button 
            onClick={() => setSelectedAlbum(null)}
            className="flex items-center space-x-2 text-primary-600 font-bold mb-8 hover:underline"
          >
            <HiCollection />
            <span>Back to Albums</span>
          </button>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">{selectedAlbum.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{selectedAlbum.description}</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {selectedAlbum.images_url.map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg border border-gray-100 dark:border-gray-800"
                onClick={() => setSelectedImg(url)}
              >
                <img src={url} alt={`${selectedAlbum.title} ${i}`} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-xl scale-0 group-hover:scale-100 transition-transform duration-300">
                    <HiZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        // Albums Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, i) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl cursor-pointer"
              onClick={() => setSelectedAlbum(album)}
            >
              <img src={album.thumb_image_url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={album.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="mb-4 w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <HiPhotograph size={24} />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-primary-400 transition-colors">{album.title}</h3>
                <p className="text-white/70 line-clamp-2 text-sm mb-4">{album.description}</p>
                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest">
                  {album.images_url.length} Photos
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Full Image Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-primary-500 transition-colors z-10">
              <HiX size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="Full view" className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/5" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
