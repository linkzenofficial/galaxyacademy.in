import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiShare } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass border-primary-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
            <span className="text-primary-600 dark:text-primary-400 font-black text-[10px] uppercase tracking-[0.3em]">We're here for you</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-none"
          >
            Let's Start a <br />
            <span className="gradient-text">Conversation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Whether you're a prospective student, a parent, or just want to say hello, we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-[3.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl" />
              <h2 className="text-3xl font-black mb-10 tracking-tight">Contact Information</h2>
              
              <div className="space-y-10">
                 {[
                   { icon: HiMail, label: 'Email Address', value: 'galaxyacademyglp2015@gmail.com', color: 'text-blue-500' },
                   { icon: HiPhone, label: 'Phone Number', value: '91013 20250', color: 'text-green-500' },
                   { icon: HiLocationMarker, label: 'Visit Academy', value: 'Baladmari, Ward No.- 19, Matia Road, Goalpara (Assam) 783121', color: 'text-red-500' },
                 ].map((item, i) => (
                   <div key={i} className="group cursor-pointer">
                     <div className="flex items-start space-x-6">
                       <div className={`w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm`}>
                         <item.icon size={28} />
                       </div>
                       <div className="flex-1">
                         <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{item.label}</p>
                         <p className="text-xl font-bold dark:text-white leading-snug">{item.value}</p>
                       </div>
                     </div>
                   </div>
                 ))}
              </div>

              <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="font-black uppercase tracking-widest text-[10px] text-gray-400 mb-4 flex items-center">
                    <HiShare className="mr-2" />
                    Connect With Us
                  </h4>
                  <div className="flex space-x-4">
                    {['FB', 'LN', 'TW', 'IG'].map((social, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ y: -5 }}
                        className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-[10px] font-black hover:bg-primary-600 hover:text-white transition-all cursor-pointer shadow-sm"
                      >
                        {social}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Map Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-[400px] rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative group"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916881.7911257684!2d89.4122314453125!3d26.145576207592274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3759b37a8d6959a9%3A0xd15640654b76761!2sGalaxy%20Academy!5e0!3m2!1sen!2sin!4v1777653354986!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              ></iframe>
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-xl shadow-lg pointer-events-none">
                 <p className="text-[10px] font-black uppercase tracking-widest text-primary-600">Our Location</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-12 lg:p-16 rounded-[4rem] relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
              
              <h2 className="text-4xl font-black mb-12 tracking-tight">Send a <span className="text-primary-600">Message</span></h2>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                    <input type="text" className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-100 dark:ring-gray-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Enter first name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                    <input type="text" className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-100 dark:ring-gray-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Enter last name" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input type="email" className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-100 dark:ring-gray-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="name@email.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">How can we help?</label>
                  <select className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-100 dark:ring-gray-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Admission Question</option>
                    <option>Technical Support</option>
                    <option>Business Partnership</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea rows="6" className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-100 dark:ring-gray-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none" placeholder="Write your message here..."></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center space-x-3 py-6 text-lg group">
                  <span>Send Message</span>
                  <HiPaperAirplane className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
