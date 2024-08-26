import axios from 'axios';
const URL =  "http://localhost:8000/";

export const login = async(data)=>{
    let result = await axios.post(`${URL}auth/login`, data);    
    return result;
}

export const signUp = async(data)=>{
    let result = await axios.post(`${URL}auth/signup`, data);    
    return result;
}

export const AllBLog = async (data) => {
    try {
      const response = await axios.post(`${URL}blogs/all-blog`, data); // Adjust the endpoint as needed
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };