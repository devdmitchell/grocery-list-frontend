import axios from 'axios'

const API_URL = 'http://localhost:3000/grocery'

export const getGroceries = () => axios.get(`${API_URL}/get-all-groceries`)
export const createGrocery = (grocery) => axios.post(`${API_URL}/create-grocery`, grocery)
export const updateGrocery = (id, data) => axios.put(`${API_URL}/update-grocery-by-id/${id}`, data)
export const deleteGrocery = (id) => axios.delete(`${API_URL}/delete-grocery-by-id/${id}`)