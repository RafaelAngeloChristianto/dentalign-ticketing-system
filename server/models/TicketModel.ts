import mongoose from 'mongoose'

export type IssueType = "IT System" | "Management"
export type PriorityType = "High" | "Medium" | "Low";
export type StatusType = "In Progress" | "Completed" | "Unseen"

const TicketSchema = new mongoose.Schema({
    ticket_id: {
        type: String,
        required: true,
        unique: true,
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignee: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["IT System", "Management"],
        required: true
    },
    date_created: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        required: true,
    },
    status: {
        type: String,
        enum: ["In Progress", "Completed", "Unseen"],
        default: "Unseen",
    }
})

const Ticket = mongoose.model('Tickets', TicketSchema)

export interface DummyTicket {
    id : string
    title: string
    assignee: string
    type: string
    dateCreated: string
    priority: PriorityType
    status: StatusType
}

export { Ticket }
