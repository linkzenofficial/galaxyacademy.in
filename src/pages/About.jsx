import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiHeart, HiAcademicCap, HiLightningBolt } from 'react-icons/hi';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Hero */}
        <div className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass border-primary-500/20 mb-10"
          >
            <HiStar className="text-primary-500 animate-spin-slow" />
            <span className="text-primary-600 dark:text-primary-400 font-black text-[10px] uppercase tracking-[0.3em]">Established 2015</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-9xl font-black tracking-tighter mb-10 leading-none"
          >
            Nurturing <br />
            <span className="gradient-text">Future Leaders</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Galaxy Academy is more than a school; it's a launchpad for dreams, 
            where academic excellence meets character building.
          </motion.p>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary-500/10 rounded-[4rem] blur-[100px]" />
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format" alt="Our Students" className="w-full h-full object-cover" />
              <div className="absolute bottom-8 left-8 right-8 p-8 glass rounded-[2.5rem]">
                 <p className="text-white font-black text-2xl tracking-tighter italic">"Empowering minds, transforming lives."</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-none">Our Vision <br />& Mission</h2>
              <div className="w-20 h-2 bg-primary-500 rounded-full" />
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              We believe every child possesses a unique galaxy of potential. Our mission is to provide the tools, 
              environment, and guidance to help them shine their brightest.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: HiHeart, title: 'Character', desc: 'Building integrity and moral values.', color: 'bg-red-50 text-red-500' },
                { icon: HiAcademicCap, title: 'Excellence', desc: 'Striving for academic mastery.', color: 'bg-blue-50 text-blue-500' },
                { icon: HiLightningBolt, title: 'Innovation', desc: 'Encouraging creative thinking.', color: 'bg-amber-50 text-amber-500' },
                { icon: HiStar, title: 'Leadership', desc: 'Preparing future global citizens.', color: 'bg-purple-50 text-purple-500' },
              ].map((pill, i) => (
                <div key={i} className="p-8 glass-card rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-12 h-12 ${pill.color} dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    <pill.icon size={24} />
                  </div>
                  <h4 className="font-black text-xl mb-2">{pill.title}</h4>
                  <p className="text-sm text-gray-500 font-medium">{pill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Faculty Section */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter mb-20"
          >
            The <span className="gradient-text">Expert Faculty</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
             {[1,2,3,4].map(i => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ y: -15 }}
                 className="group"
               >
                 <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-2xl border-4 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                   <img src={`https://i.pravatar.cc/400?u=teacher${i}`} className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" alt="Teacher" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <h4 className="font-black text-2xl mb-1">Faculty Member</h4>
                 <p className="text-primary-600 font-black text-[10px] uppercase tracking-[0.2em]">Subject Specialist</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
