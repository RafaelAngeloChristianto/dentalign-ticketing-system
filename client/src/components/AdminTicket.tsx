import React, { useState } from "react";
import { PriorityType, StatusType } from "../../../server/models/TicketModel";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";
import AdminTicketPopup from "./AdminTicketPopUp";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const styles = {
    cell: "py-3 px-2 sm:px-4 text-sm border-b whitespace-nowrap",
    titleCell: "py-3 px-2 sm:px-4 text-sm border-b max-w-[200px] truncate"
  }

  const handleRowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(prev => !prev);
  };

  return (
    <>
      <tr 
        className="hover:bg-gray-50 transition-colors cursor-pointer" 
        onClick={handleRowClick}
        role="button"
        tabIndex={0}
      >
        <td className={styles.cell}>{id}</td>
        <td className={styles.titleCell} title={title}>{title}</td>
        <td className={styles.cell}>{assignee}</td>
        <td className={styles.cell}>{type}</td>
        <td className={styles.cell}>{dateCreated}</td>
        <td className={styles.cell}>
          <PriorityDisplay priority={priority} />
        </td>
        <td className={styles.cell}>
          <StatusDisplay status={status} />
        </td>
      </tr>

      {isPopupOpen && (
        <AdminTicketPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          ticket={{
            id,
            title,
            assignee,
            type,
            dateCreated,
            priority,
            status
          }}
        />
      )}
    </>
  );
};

export default AdminTicket;
