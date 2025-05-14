import React from "react";
import AdminTicket from "./AdminTicket";

const AdminTable = () => {
  const tickets = [
    {
      id: "DENT-1001",
      title: "Patient Records System Error",
      assignee: "Dr Cindy",
      type: "IT System",
      dateCreated: "30/04/2025",
      priority: "Low",
      status: "In Progress",
    },
    {
      id: "DENT-1001",
      title: "Patient Records System Error",
      assignee: "Dr Cindy",
      type: "IT System",
      dateCreated: "30/04/2025",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "DENT-1001",
      title: "Patient Records System Error",
      assignee: "Dr Cindy",
      type: "IT System",
      dateCreated: "30/04/2025",
      priority: "High",
      status: "In Progress",
    },
  ];

  return (
    <div className="overflow-x-auto mt-4 px-4">
      <table className="min-w-full text-left border-collapse">
        <thead className="bg-gray-100 text-gray-600 text-sm font-semibold border-b">
          <tr>
            <th className="py-3 px-4">Ticket ID</th>
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Assignee</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Date Created</th>
            <th className="py-3 px-4">Priority</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <AdminTicket key={ticket.id} {...ticket} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
