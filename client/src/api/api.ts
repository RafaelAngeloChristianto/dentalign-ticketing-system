import axios from 'axios';

const API_URL = 'http://localhost:3000/service/user';

interface ApiErrorResponse {
  message: string;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  signUp: async (userData: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber?: string;
  }) => {
    const response = await api.post('/signup', userData);
    return response.data;
  },

  signIn: async (credentials: {
    email: string;
    password: string;
  }) => {
    const response = await api.post('/signin', credentials);
    return response.data;
  },

  verifyOtp: async (email: string, otp: string) => {
    const response = await api.post('/verify-otp', { email, otp });
    return response.data;
  },

  resendOtp: async (email: string) => {
    const response = await api.post('/resend-otp', { email });
    return response.data;
  },
};

export type { ApiErrorResponse };
export default api; 