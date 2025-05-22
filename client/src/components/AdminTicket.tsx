import React from "react";
import { PriorityType, StatusType } from "../../../server/models/TicketModel";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";

interface Props { 
  id          : string
  title       : string
  assignee    : string
  type        : string
  dateCreated : string
  priority    : PriorityType
  status      : StatusType
};

const AdminTicket: React.FC<Props> = ({ id, title, assignee, type, dateCreated, priority, status }) => {

  return (
    <tr className="text-sm border-b">
      <td className="py-3 px-4">{id}</td>
      <td className="py-3 px-4">{title}</td>
      <td className="py-3 px-4">{assignee}</td>
      <td className="py-3 px-4">{type}</td>
      <td className="py-3 px-4">{dateCreated}</td>
      <td className="py-3 px-4">
        <PriorityDisplay priority={priority} />
      </td>
      <td className="py-3 px-4">
        <StatusDisplay status={status} />
      </td>
    </tr>
  );
};

export default AdminTicket;
