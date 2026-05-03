import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiAcademicCap, HiLightningBolt, HiUsers, HiGlobe, HiChevronLeft, HiChevronRight, HiStar, HiHome, HiBookOpen, HiBell, HiCalendar, HiPhotograph } from 'react-icons/hi';
import { fetchSliders, fetchNews, fetchGallery, fetchTestimonials } from '../services/api';

const Home = () => {
  const [sliders, setSliders] = useState([]);
  const [news, setNews] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const [sliderData, newsData, galleryData, testimonialData] = await Promise.all([
        fetchSliders(27),
        fetchNews(27),
        fetchGallery(27),
        fetchTestimonials(27)
      ]);
      if (sliderData) setSliders(sliderData);
      if (newsData) setNews(newsData);
      if (galleryData) setGallery(galleryData);
      if (testimonialData) setTestimonials(testimonialData);
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    if (sliders.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sliders.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [sliders]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % sliders.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + sliders.length) % sliders.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.07]" 
               style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-3 glass px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-sm font-black text-primary-600 mb-8 border border-primary-500/10 shadow-xl shadow-primary-500/5 uppercase tracking-widest sm:tracking-wide">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                <span>Admissions Open for 2026-27</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 
                    className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-[1.1] tracking-tight text-gray-900 dark:text-white"
                    dangerouslySetInnerHTML={{ 
                      __html: (sliders.length > 0 && sliders[currentIndex].title && sliders[currentIndex].title !== '#')
                        ? sliders[currentIndex].title.replace(/<h2>(.*?)<\/h2>/g, '<span class="gradient-text">$1</span>') 
                        : 'Excellence from <span class="gradient-text">Nursery to Class X</span>' 
                    }}
                  />
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-xl">
                    {(sliders.length > 0 && sliders[currentIndex].description && sliders[currentIndex].description !== '#') 
                      ? sliders[currentIndex].description 
                      : "Galaxy Academy offers a premium English Medium education, nurturing young minds with holistic development and academic excellence."}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link to="/admission" className="group relative bg-primary-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold transition-all hover:bg-primary-700 shadow-2xl shadow-primary-500/30 overflow-hidden text-center sm:text-left">
                  <span className="relative z-10 flex items-center justify-center sm:justify-start space-x-2">
                    <span>Apply Now</span>
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
                <Link to="/services" className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-700 text-center sm:text-left">
                  Explore Curriculum
                </Link>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl animate-bounce-slow" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-bounce-slow delay-1000" />
              
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-white dark:bg-gray-800 p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative group">
                  <img 
                    src={sliders.length > 0 ? sliders[currentIndex].image_url : "/hero.png"} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt="Education" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Floating Stat Card */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 lg:-right-12 glass p-6 rounded-2xl shadow-2xl z-20 border border-white/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <HiAcademicCap size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 dark:text-white leading-none">100%</div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 mt-1">Academic Success</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: HiUsers, label: 'Students', value: '500+' }, { icon: HiAcademicCap, label: 'Teachers', value: '30+' }, { icon: HiHome, label: 'Classrooms', value: '25+' }, { icon: HiStar, label: 'Success Rate', value: '100%' }].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center group hover:border-primary-500/50 transition-all hover:shadow-xl hover:shadow-primary-500/5">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* News & Notifications Section */}
      <section className="py-24 bg-primary-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center space-x-2 text-primary-600 font-bold mb-4 uppercase tracking-widest text-sm">
                <HiBell className="animate-bounce" />
                <span>Stay Updated</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Latest <span className="gradient-text">News</span> & Notifications</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Keep track of school reopenings, event dates, and important announcements.</p>
              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-primary-600 hover:text-white transition-all shadow-sm">View All News</button>
            </div>
            <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.slice(0, 4).map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-6 rounded-3xl border-gray-100 dark:border-gray-800 group hover:border-primary-500/50 transition-all flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4"><div className="flex items-center space-x-2 text-xs text-gray-500 font-medium"><HiCalendar className="text-primary-500" /><span>{item.date}</span></div><span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span></div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">{item.title}</h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div className="mt-auto flex items-center justify-between"><button className="text-primary-600 font-bold text-sm flex items-center space-x-1 group/btn"><span>Read More</span><HiArrowRight /></button>{item.image_url && <div className="w-12 h-12 rounded-xl overflow-hidden"><img src={item.image_url} className="w-full h-full object-cover" alt="News" /></div>}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Spotlight Section */}
      <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-primary-600 font-bold mb-4 uppercase tracking-widest text-sm"
            >
              <HiPhotograph className="animate-pulse" />
              <span>Visual Journey</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold">Academy <span className="gradient-text">Gallery</span></h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Capturing the vibrant moments and achievements of our students across various academic and extracurricular activities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {gallery.slice(0, 4).map((album, i) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative rounded-[2rem] overflow-hidden shadow-lg cursor-pointer ${i % 2 === 0 ? 'lg:translate-y-8' : ''}`}
              >
                <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                  <img src={album.thumb_image_url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={album.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="transform transition-transform duration-500"
                  >
                    <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-primary-400 transition-colors">{album.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{album.description}</p>
                    <div className="w-10 h-1 bg-primary-500 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <Link 
              to="/gallery" 
              className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all shadow-xl hover:shadow-primary-500/25 group"
            >
              <span>View Full Gallery</span>
              <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* School Levels Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Academic <span className="gradient-text">Levels</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We provide a comprehensive learning journey from early childhood to secondary education.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[{ title: 'Primary Wing', category: 'Nursery - Class V', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800' }, { title: 'Middle School', category: 'Class VI - VIII', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800' }, { title: 'Secondary Wing', category: 'Class IX - X', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800' }].map((level, i) => (
             <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800">
               <div className="h-56 overflow-hidden relative"><img src={level.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={level.title} /><div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-600">{level.category}</div></div>
               <div className="p-8 text-center"><h3 className="text-xl font-bold mb-4 group-hover:text-primary-500 transition-colors">{level.title}</h3><button className="text-primary-600 font-bold flex items-center justify-center space-x-1 group/btn mx-auto"><span>View Details</span><HiArrowRight /></button></div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Management Section */}
      <section className="relative py-32 bg-white dark:bg-gray-950 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-gray-500/5 dark:text-white/5 whitespace-nowrap select-none">
            MANAGEMENT MANAGEMENT MANAGEMENT
          </div>
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-primary-600 font-bold mb-4 uppercase tracking-[0.3em] text-sm"
              >
                <div className="w-12 h-[2px] bg-primary-500" />
                <span>Our Leadership</span>
              </motion.div>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tight leading-none">
                The Minds Behind <br />
                <span className="gradient-text">Galaxy Academy</span>
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md lg:mb-2">
              Driven by a passion for education and a commitment to nurturing the next generation of leaders.
            </p>
          </div>

          <div className="relative -mx-4 lg:-mx-8">
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {/* Double the array for seamless infinite loop */}
                {[...testimonials, ...testimonials].map((member, i) => (
                  <div key={member.id || i} className="flex-shrink-0 w-[400px] px-6 py-12">
                    <motion.div 
                      whileHover={{ y: -20, scale: 1.02 }}
                      className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[3.5rem] p-12 text-center border border-gray-100 dark:border-gray-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:shadow-none transition-all duration-700 overflow-hidden"
                    >
                      {/* Interactive Hover Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/[0.03] group-hover:to-purple-500/[0.03] transition-all duration-700" />
                      
                      <div className="relative z-10">
                        {/* Profile Image with Creative Frame */}
                        <div className="relative w-48 h-48 mx-auto mb-10">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border border-dashed border-primary-500/30 rounded-[3rem]" 
                          />
                          <div className="absolute inset-0 bg-primary-600 rounded-[3rem] rotate-12 group-hover:rotate-[20deg] transition-transform duration-700" />
                          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[3rem] shadow-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800">
                            <img src={member.image_url} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                          </div>
                        </div>
                        
                        <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tighter group-hover:text-primary-600 transition-colors">
                          {member.name}
                        </h4>
                        
                        <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                          <span>{member.designation || member.role}</span>
                        </div>
                        
                        <div className="relative mb-10">
                          <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic line-clamp-4 relative z-10 px-4"
                               dangerouslySetInnerHTML={{ __html: member.description || member.message }} />
                          <span className="absolute -top-6 -left-2 text-7xl text-primary-500/5 font-serif select-none">"</span>
                        </div>
                        
                        <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          {['FB', 'LN', 'TW'].map((social) => (
                            <div key={social} className="w-10 h-10 rounded-2xl bg-primary-600 text-white text-[8px] font-bold flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-all cursor-pointer shadow-lg shadow-primary-500/20">
                              {social}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Elegant Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-gray-950 via-white/50 dark:via-gray-950/50 to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white dark:from-gray-950 via-white/50 dark:via-gray-950/50 to-transparent z-20" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What <span className="gradient-text">Parents</span> Say</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Hear from the families who have trusted us with their children's education and future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.length > 0 ? testimonials.slice(0, 3).map((testimonial, i) => (
              <motion.div
                key={testimonial.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative group hover:border-primary-500/50 transition-all"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  <HiStar size={32} />
                </div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-gray-800 bg-gray-50">
                    <img src={testimonial.image_url} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600 font-medium">{testimonial.designation || testimonial.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-primary-500/10 font-serif">"</span>
                  <p 
                    className="text-gray-600 dark:text-gray-400 leading-relaxed italic relative z-10 line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: testimonial.description || testimonial.message }}
                  />
                </div>

                <div className="mt-8 flex text-yellow-400 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} />
                  ))}
                </div>
              </motion.div>
            )) : (
              <div className="col-span-full text-center py-10 text-gray-500 italic">
                No testimonials available at the moment.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
