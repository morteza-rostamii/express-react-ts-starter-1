import axios from 'axios';

const URL = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL_D : process.env.NEXT_PUBLIC_API_URL_P || '';

const Axios = axios.create({
  baseURL: URL,
  headers: {"Content-Type": 'application/json'},
  // for setting cookies
  withCredentials: true,
});

const api = {

  async testApi() {
    try {
      const response = await Axios.get('/'); 
      console.log(response);
    } 
    catch(error: any) {
      console.error(error?.message || error);
    }
  },

  // /auth
  async register(payload: {username: string, email: string}) {
    return await Axios.post('/auth/register', payload);
  },

  async verify(payload: {otp: string, email: string}) {
    return await Axios.post('/auth/verify', payload);
  },

  async checkAuth() {
    return await Axios.post('/auth/check-auth');
  },

  async logout() {
    return await Axios.post('/auth/logout');
  },

  // /todos
  
}

export default api