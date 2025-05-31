import React, { useState } from 'react';
import { X, Calendar, AlertCircle, User, FileText, Settings } from 'lucide-react';
import { PriorityType, StatusType } from "../../../server/models/TicketModel";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ticket: {
    id: string;
    title: string;
    assignee: string;
    type: string;
    dateCreated: string;
    priority: PriorityType;
    status: StatusType;
  };
}

const AdminTicketPopUp: React.FC<Props> = ({ isOpen, onClose, ticket }) => {
  // Removed local state and hardcoded data
  
  const getPriorityColor = (priority: PriorityType) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status: StatusType) => {
    switch (status.toLowerCase()) {
      case 'in progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-semibold">Ticket Details</h2>
          <p className="text-blue-100 text-sm mt-1">Support Request Information</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[calc(90vh-180px)] overflow-y-auto">
          {/* Date Section */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-600 mb-3 flex items-center gap-2">
              <Calendar size={16} />
              Date Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Created At</span>
                <p className="text-gray-900 font-medium">{ticket.dateCreated}</p>
              </div>
              {/* Assuming viewDate is not in the current ticket data, keeping Created At for now */}
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">View Date</span>
                <p className="text-gray-900 font-medium">{ticket.dateCreated}</p>
              </div>
            </div>
          </div>

          {/* Status & Priority */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-600 mb-3 flex items-center gap-2">
              <AlertCircle size={16} />
              Condition
            </h3>
            <div className="flex gap-3">
              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket.priority)}`}>
                Priority: {ticket.priority}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                Status: {ticket.status}
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-600 mb-4 flex items-center gap-2">
              <FileText size={16} />
              Ticket Details
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">
                    <Settings size={12} />
                    Ticket ID
                  </span>
                  <p className="text-gray-900 font-medium">{ticket.id}</p>
                </div>
                {/* Assuming userId is not in the current ticket data */}
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">
                    <User size={12} />
                    Assignee
                  </span>
                  <p className="text-gray-900 font-medium">{ticket.assignee}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide flex items-center gap-1">
                    <FileText size={12} />
                    Type
                  </span>
                  <p className="text-gray-900 font-medium">{ticket.type}</p>
                </div>
              </div>
              
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">Description</span>
                 {/* Assuming description is not in the current ticket data, using title for now */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{ticket.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
            Edit
          </button>
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium shadow-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminTicketPopUp;