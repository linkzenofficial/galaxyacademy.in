import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBookOpen, HiUserGroup, HiLightningBolt, HiColorSwatch, HiGlobe, HiArrowRight } from 'react-icons/hi';

const Services = () => {
  const academicPrograms = [
    { title: 'Pre-Primary Wing', icon: HiColorSwatch, desc: 'Nurturing Nursery, LKG, and UKG students with play-way methods and basic language skills.', color: 'text-pink-500' },
    { title: 'Primary School', icon: HiBookOpen, desc: 'Classes I to V focusing on strong foundations in English, Math, and Environmental Science.', color: 'text-blue-500' },
    { title: 'Middle School', icon: HiUserGroup, desc: 'Classes VI to VIII with an integrated curriculum and focus on analytical thinking.', color: 'text-purple-500' },
    { title: 'Secondary Wing', icon: HiAcademicCap, desc: 'Classes IX and X prepared for board examinations with specialized subject guidance.', color: 'text-emerald-500' },
    { title: 'Co-Curricular', icon: HiLightningBolt, desc: 'Developing talents in Music, Art, Sports, and Public Speaking for holistic growth.', color: 'text-amber-500' },
    { title: 'Digital Literacy', icon: HiGlobe, desc: 'Modern computer education and smart class integration from a young age.', color: 'text-cyan-500' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Creative Hero */}
        <div className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass border-primary-500/20 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
            <span className="text-primary-600 dark:text-primary-400 font-black text-[10px] uppercase tracking-[0.3em]">Excellence in Education</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-9xl font-black tracking-tighter mb-10 leading-none"
          >
            Academic <br />
            <span className="gradient-text">Programs</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A meticulously designed curriculum for every stage of development, 
            ensuring a seamless transition from first steps to global success.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {academicPrograms.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 rounded-[3.5rem] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -z-10 group-hover:bg-primary-500/10 transition-all" />
              
              <div className={`w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-[1.5rem] flex items-center justify-center ${program.color} mb-10 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800`}>
                <program.icon size={40} />
              </div>
              
              <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-primary-600 transition-colors">{program.title}</h3>
              
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10 font-medium h-24">
                {program.desc}
              </p>
              
              <button className="flex items-center space-x-3 text-sm font-black uppercase tracking-widest text-primary-600 group-hover:space-x-5 transition-all">
                <span>View Details</span>
                <HiArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-16 rounded-[4rem] glass relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-primary-500/10 animate-gradient" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">Ready to join our community?</h2>
            <button className="btn-primary">Apply for Admission</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
