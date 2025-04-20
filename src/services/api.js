// api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL; // Update with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Jobs API
export const getJobs = () => api.get('/jobs');
export const getJobById = (id) => api.get(`/jobs/${id}`);
export const createJob = (jobData) => api.post('/jobs', jobData);
export const updateJob = (id, jobData) => api.put(`/jobs/${id}`, jobData);
export const deleteJob = (id) => api.delete(`/jobs/${id}`);

api.interceptors.request.use(
  config => {
    console.log('API Request:', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
