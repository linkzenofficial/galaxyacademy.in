import axios from 'axios';

const BASE_URL = 'https://galaxyacademy.in/api/frontend';

export const fetchSliders = async (branchId = 27) => {
  try {
    const response = await axios.get(`${BASE_URL}/slider?branch_id=${branchId}`);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return [];
  }
};

export const fetchNews = async (branchId = 27) => {
  try {
    const response = await axios.get(`${BASE_URL}/news?branch_id=${branchId}`);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const fetchGallery = async (branchId = 27) => {
  try {
    const response = await axios.get(`${BASE_URL}/gallery?branch_id=${branchId}`);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};

export const fetchAdmissionConfig = async (branchId = 27) => {
  try {
    const response = await axios.get(`${BASE_URL}/admission?branch_id=${branchId}`);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching admission config:', error);
    return null;
  }
};

export const submitAdmission = async (formData, branchId = 27) => {
  try {
    const response = await axios.post(`${BASE_URL}/submit_admission?branch_id=${branchId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting admission:', error);
    throw error;
  }
};
export const fetchTestimonials = async (branchId = 27) => {
  try {
    const response = await axios.get(`${BASE_URL}/testimonial?branch_id=${branchId}`);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};
