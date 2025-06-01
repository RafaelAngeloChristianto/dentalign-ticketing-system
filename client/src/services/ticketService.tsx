import { PriorityType, StatusType } from "../../../server/models/TicketModel";

const API_URL = 'http://localhost:3000/service/tickets';

export const ticketService = {
  getAllTickets: async () => {
    const response = await fetch(`${API_URL}/get_tickets_all`);
    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }
    return response.json();
  },

  getTicketsByOwner: async (ownerId: string) => {
    const response = await fetch(`${API_URL}/get_tickets_byOwnerId/${ownerId}`);
     if (!response.ok) {
      throw new Error('Failed to fetch tickets by owner');
    }
    return response.json();
  },

  async updateTicket(ticketId: string, updates: { status?: StatusType; priority?: PriorityType }) {
    const response = await fetch(`${API_URL}/update_status/${ticketId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error('Failed to update ticket');
    }

    return response.json();
  },

  async deleteTicket(ticketId: string) {
    const response = await fetch(`${API_URL}/delete_ticket/${ticketId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete ticket');
    }

    return response.json();
  }
}; 