// services/api.js
import axios from 'axios';

// A public API for demonstration purposes. Replace with your actual API if needed.
// Example: JSONPlaceholder for dummy data
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getItems = async () => {
    try {
        const response = await api.get('/posts'); // Example endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

// You can add more API functions here (e.g., getItemById, loginApi, etc.)
export const getItemById = async (id) => {
    try {
        const response = await api.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching item with ID ${id}:`, error);
        throw error;
    }
};