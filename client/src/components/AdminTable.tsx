import React from "react";
import AdminTicket from "./AdminTicket";
import { Ticket } from "../../../server/models/TicketModel";

const AdminTable = () => {

  const tickets:Ticket[] = [
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

  const styles = {
    container: "overflow-x-auto mt-4 px-4",
    table : "min-w-full text-left border-collapse",
    header: "bg-gray-100 text-gray-600 text-sm font-semibold border-b",
    headerData: "py-3 px-4"
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th className={styles.headerData}>Ticket ID</th>
            <th className={styles.headerData}>Title</th>
            <th className={styles.headerData}>Assignee</th>
            <th className={styles.headerData}>Type</th>
            <th className={styles.headerData}>Date Created</th>
            <th className={styles.headerData}>Priority</th>
            <th className={styles.headerData}>Status</th>
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
