import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Vessel API
export const vesselAPI = {
  getAll: () => api.get('/vessels'),
  getById: (id) => api.get(`/vessels/${id}`),
  create: (data) => api.post('/vessels', data),
  update: (id, data) => api.put(`/vessels/${id}`, data),
  delete: (id) => api.delete(`/vessels/${id}`)
}

// Flooring API
export const flooringAPI = {
  getAll: () => api.get('/flooring'),
  getById: (id) => api.get(`/flooring/${id}`),
  create: (data) => api.post('/flooring', data),
  update: (id, data) => api.put(`/flooring/${id}`, data),
  delete: (id) => api.delete(`/flooring/${id}`)
}

// Review API
export const reviewAPI = {
  getAll: () => api.get('/reviews'),
  getApproved: () => api.get('/reviews/approved'),
  create: (data) => api.post('/reviews', data),
  approve: (id) => api.put(`/reviews/${id}/approve`),
  delete: (id) => api.delete(`/reviews/${id}`)
}

// Contact API
export const contactAPI = {
  getAll: () => api.get('/contact'),
  create: (data) => api.post('/contact', data),
  updateStatus: (id, status) => api.put(`/contact/${id}/status`, { status }),
  delete: (id) => api.delete(`/contact/${id}`)
}

export default api
