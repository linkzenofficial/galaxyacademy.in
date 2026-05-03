import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiInformationCircle, HiCloudUpload, HiArrowRight, HiUser, HiHome, HiUserGroup, HiDocumentText, HiCreditCard, HiPhotograph } from 'react-icons/hi';
import { fetchAdmissionConfig, submitAdmission } from '../services/api';

const Admission = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [response, setResponse] = useState(null);

  const [formData, setFormData] = useState({
    class_id: '',
    section: '',
    first_name: '',
    last_name: '',
    gender: 'male',
    birthday: '',
    student_email: '',
    student_mobile_no: '',
    admission_date: new Date().toISOString().split('T')[0],
    village: '',
    post_office: '',
    city: '',
    state: '',
    pin_code: '',
    adhaar_no: '',
    guardian_name: '',
    guardian_relation: '',
    father_name: '',
    mother_name: '',
    guardian_mobile_no: '',
    guardian_email: '',
    guardian_occupation: '',
    guardian_income: '',
    student_photo: null,
    guardian_photo: null,
    upload_documents: null,
    school_name: '',
    qualification: '',
    previous_remarks: ''
  });

  useEffect(() => {
    const getConfig = async () => {
      const data = await fetchAdmissionConfig(27);
      if (data) setConfig(data);
      setLoading(false);
    };
    getConfig();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });
      
      const result = await submitAdmission(data, 27);
      if (result.status === 'success') {
        setResponse(result.data);
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(result.message || 'Submission failed. Please check all required fields.');
      }
    } catch (err) {
      alert('An error occurred during submission. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const sections = [
    { id: 'personal', label: 'Personal', icon: HiUser },
    { id: 'address', label: 'Address', icon: HiHome },
    { id: 'guardian', label: 'Guardian', icon: HiUserGroup },
    { id: 'education', label: 'Education', icon: HiDocumentText },
    { id: 'documents', label: 'Documents', icon: HiCloudUpload },
  ];

  if (loading) return (
    <div className="pt-32 pb-20 flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  );

  if (success) return (
    <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto text-center">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass p-12 rounded-[3rem] border-primary-100 shadow-2xl">
        <HiCheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Application Successful!</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Your application has been received with Reference No: <span className="font-bold text-primary-600">{response?.reference_no}</span>. 
          Please keep this number for your records.
        </p>
        
        {response?.payment_required && (
          <div className="mb-10 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-3xl border border-primary-100 dark:border-primary-800">
            <h3 className="text-xl font-bold mb-2 flex items-center justify-center space-x-2">
              <HiCreditCard className="text-primary-600" />
              <span>Payment Required</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">To complete your admission process, please proceed with the application fee payment.</p>
            <a href={response.payment_url} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all">
              <span>Pay Now</span>
              <HiArrowRight />
            </a>
          </div>
        )}

        <button onClick={() => { setSuccess(false); window.location.reload(); }} className="text-primary-600 font-bold hover:underline">
          Go Back
        </button>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <section className="relative py-20 overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass border-primary-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
            <span className="text-primary-600 dark:text-primary-400 font-black text-[10px] uppercase tracking-[0.3em]">Admissions Open 2024-25</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-none"
          >
            Begin Your <br />
            <span className="gradient-text">Journey Here</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Join a community of curious minds and future leaders. Our simple online application process is the first step towards a galaxy of opportunities.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
            <div className="glass-card p-8 rounded-[3rem] sticky top-32">
              <nav className="space-y-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`w-full flex items-center space-x-4 p-5 rounded-2xl transition-all duration-300 font-bold group ${
                      activeTab === section.id 
                        ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/25' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    <div className={`p-2 rounded-xl transition-colors ${activeTab === section.id ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-500/10'}`}>
                      <section.icon size={20} />
                    </div>
                    <span className="text-sm tracking-tight">{section.label}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-12 p-6 rounded-[2rem] bg-primary-500/5 border border-primary-500/10">
                <div className="flex items-center space-x-3 text-primary-600 dark:text-primary-400 font-black text-xs uppercase tracking-widest mb-3">
                  <HiInformationCircle size={18} />
                  <span>Need Help?</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">Our admission counselors are here to help you.</p>
                <a href="tel:9101320250" className="text-lg font-black hover:text-primary-600 transition-colors tracking-tighter">91013 20250</a>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-12 lg:p-16 rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -z-10" />
              
              <AnimatePresence mode="wait">
                {activeTab === 'personal' && (
                  <motion.div
                    key="personal"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600">
                        <HiUser size={24} />
                      </div>
                      <span>Personal Information</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Applying for Class</label>
                        <select name="class_id" value={formData.class_id} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all">
                          <option value="">Select Class</option>
                          {config?.classes?.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Enter first name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Enter last name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Date of Birth</label>
                        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'address' && (
                  <motion.div
                    key="address"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600">
                        <HiHome size={24} />
                      </div>
                      <span>Residential Address</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <input type="text" name="village" value={formData.village} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Village / Area" />
                      <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="City" />
                      <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="State" />
                      <input type="text" name="pin_code" value={formData.pin_code} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="PIN Code" />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'guardian' && (
                  <motion.div
                    key="guardian"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600">
                        <HiUserGroup size={24} />
                      </div>
                      <span>Guardian Details</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <input type="text" name="guardian_name" value={formData.guardian_name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Guardian Name" />
                      <input type="tel" name="guardian_mobile_no" value={formData.guardian_mobile_no} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Guardian Mobile" />
                      <input type="text" name="father_name" value={formData.father_name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Father's Name" />
                      <input type="text" name="mother_name" value={formData.mother_name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Mother's Name" />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600">
                        <HiDocumentText size={24} />
                      </div>
                      <span>Previous Education</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-8">
                      <input type="text" name="school_name" value={formData.school_name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="Last School Attended" />
                      <textarea name="previous_remarks" value={formData.previous_remarks} onChange={handleChange} className="w-full px-6 py-4 rounded-[2rem] bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 outline-none transition-all h-32 resize-none" placeholder="Any additional remarks..." />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'documents' && (
                  <motion.div
                    key="documents"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600">
                        <HiCloudUpload size={24} />
                      </div>
                      <span>Document Upload</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Student Photo</label>
                        <div className="relative h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center group hover:border-primary-500 transition-all">
                          <HiPhotograph className="text-gray-200 group-hover:text-primary-500 transition-colors" size={48} />
                          <input type="file" name="student_photo" onChange={handleChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                          <p className="text-xs font-bold mt-2 text-gray-400">{formData.student_photo?.name || 'JPG, PNG (Max 2MB)'}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Transfer Certificate / Marks Card</label>
                        <div className="relative h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center group hover:border-primary-500 transition-all">
                          <HiDocumentText className="text-gray-200 group-hover:text-primary-500 transition-colors" size={48} />
                          <input type="file" name="upload_documents" onChange={handleChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                          <p className="text-xs font-bold mt-2 text-gray-400">{formData.upload_documents?.name || 'PDF, JPG (Max 5MB)'}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-16 pt-10 border-t border-gray-50 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                <p className="text-xs font-medium text-gray-400 italic text-center sm:text-left">
                  * Please ensure all required documents are uploaded before final submission.
                </p>
                
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  {activeTab !== 'personal' && (
                    <button 
                      type="button" 
                      onClick={() => {
                        const prevMap = { address: 'personal', guardian: 'address', education: 'guardian', documents: 'education' };
                        setActiveTab(prevMap[activeTab]);
                      }}
                      className="px-8 py-4 rounded-2xl font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                    >
                      Previous
                    </button>
                  )}
                  
                  {activeTab === 'documents' ? (
                    <button 
                      type="submit" 
                      disabled={submitting} 
                      className="btn-primary flex-1 sm:flex-none flex items-center justify-center space-x-3 disabled:opacity-50"
                    >
                      {submitting ? (
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <HiArrowRight />
                        </>
                      )}
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      onClick={() => {
                        const nextMap = { personal: 'address', address: 'guardian', guardian: 'education', education: 'documents' };
                        setActiveTab(nextMap[activeTab]);
                      }}
                      className="btn-primary flex-1 sm:flex-none flex items-center justify-center space-x-3"
                    >
                      <span>Continue</span>
                      <HiArrowRight />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
