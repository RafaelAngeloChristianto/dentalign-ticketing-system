import express, { RequestHandler } from 'express'
import { createTicket, deleteTicket, getTickets, getTicketsByOwnerID, updateStatus } from '../controllers/TicketController';

const router = express.Router();

router.post('/create_ticket/:owner_id', <RequestHandler> createTicket)
router.get('/get_tickets_all', <RequestHandler> getTickets)
router.get('/get_tickets_byOwnerId/:owner_id', <RequestHandler> getTicketsByOwnerID)
router.patch('/update_status/:ticket_id', <RequestHandler> updateStatus)
router.delete('/delete_ticket/:ticket_id', <RequestHandler> deleteTicket)

export default router