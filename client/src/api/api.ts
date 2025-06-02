import axios from 'axios';

const API_URL = 'http://localhost:3000/service/user';
const API_URL_TICKET = 'http://localhost:3000/service/tickets';

export interface ApiErrorResponse {
  message: string;
  needsVerification?: boolean;
  email?: string;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api_ticket = axios.create({
  baseURL: API_URL_TICKET,
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

// api.ts
export const ticketService = {
  createTicket: async (
    ownerId: string,
    ticketData: {
      title: string;
      description: string;
      assignee: string;
      type: string;
      date_created: string;
      priority: string;
      status: string;
    }
  ) => {
    const response = await api_ticket.post(`/create_ticket/${ownerId}`, ticketData);
    return response.data;
  }
};
export default api; 