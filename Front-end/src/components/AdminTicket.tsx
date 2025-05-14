import React from "react";

type TicketProps = {
  id: string;
  title: string;
  assignee: string;
  type: string;
  dateCreated: string;
  priority: "High" | "Medium" | "Low";
  status: "In Progress" | "Completed" | "Unseen";
};

const AdminTicket: React.FC<TicketProps> = ({ id, title, assignee, type, dateCreated, priority, status }) => {
  const priorityColor = {
    High: "bg-red-100 text-red-500",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-500"
  };

  const statusColor = {
    "In Progress": "bg-blue-100 text-blue-600",
    "Completed": "bg-green-100 text-green-600",
    "Unseen": "bg-gray-100 text-gray-600"
  };

  return (
    <tr className="text-sm border-b">
      <td className="py-3 px-4">{id}</td>
      <td className="py-3 px-4">{title}</td>
      <td className="py-3 px-4">{assignee}</td>
      <td className="py-3 px-4">{type}</td>
      <td className="py-3 px-4">{dateCreated}</td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 rounded-md text-xs font-semibold ${priorityColor[priority]}`}>
          {priority}
        </span>
      </td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 rounded-md text-xs font-semibold ${statusColor[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default AdminTicket;
