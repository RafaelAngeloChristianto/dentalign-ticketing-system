type PriorityType = "High" | "Medium" | "Low";
type StatusType = "In Progress" | "Completed" | "Unseen"

interface Ticket {
    id : string
    title: string
    assignee: string
    type: string
    dateCreated: string
    priority: PriorityType
    status: StatusType
}

export { Ticket, PriorityType, StatusType }
