import { Ticket } from "../models/TicketModel";
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid'

const createTicket = async (req:Request, res:Response) => {
    try {
        const { owner_id } = req.params
        const { title, description, assignee, type, date_created, priority, status } = req.body
        if (!title || !description || !assignee || !type || !date_created || !priority || !status){
            res.status(404).json({ message: "Please input ticket data"})
        } 
        if (!owner_id){
            res.status(404).json({ message: "Owner ID Not Found"})
        }
        const newTicket = await Ticket.create({
            ticket_id: uuidv4(), owner_id, title, description, assignee, type, date_created, priority, status
        })
        res.status(200).json({ message: "Ticket added!", newTicket })
    } catch (err:any) {
        res.status(500).json({ message: err.message })
    }
}

const getTickets = async (_req:Request, res:Response) => {
    try {
        const data = await Ticket.find()
        res.status(200).json(data)
    }
    catch (err:any) {
        return res.status(500).json({ message: err.message });
    }
}

const getTicketsByOwnerID = async (req:Request, res:Response) => {
    try {
        const { owner_id } = req.params
        const data = await Ticket.find({owner_id: owner_id})
        res.status(200).json(data)
    }
    catch (err:any) {
        return res.status(500).json({ message: err.message });
    }
}

const updateStatus = async (req:Request, res:Response) => {
    try {
        const { ticket_id } = req.params
        const { status } = req.body

        const updated = await Ticket.findByIdAndUpdate(ticket_id, {status : status}, {new: true})
        if (!updated) {
            return res.status(404).json({ message: "Ticket not found. No updates made" })
        }
        res.status(200).json({ message: "Update successful", updated })
    } catch (err:any){
        res.status(500).json({ message: err.message })
    }
}

const deleteTicket = async (req:Request, res:Response) => {
    try {
        const { ticket_id } = req.params
        const deleted = await Ticket.findByIdAndDelete(ticket_id)

        if(!deleted){
            return res.status(404).json({message: "Ticket not found"})
        }
        res.status(200).json({ message: "Ticket deleted successfully!" });
    }
    catch (err:any) {
        return res.status(500).json({ message: err.message });
    }
}

export { createTicket, getTickets, getTicketsByOwnerID, updateStatus, deleteTicket }