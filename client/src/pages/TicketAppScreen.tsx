import React, { useState } from "react";
import { ticketService } from "../api/api";
import "./TicketAppScreen.css";

interface TicketAppScreenProps {
  ownerId: string;
}

const TicketAppScreen: React.FC<TicketAppScreenProps> = ({ ownerId }) => {
  console.log("Owner ID:", ownerId);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const assignee = "support-team";
  const priority = "Medium";
  const status = "Open";
  const date_created = new Date().toISOString();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await ticketService.createTicket(ownerId, {
        title,
        description,
        assignee,
        type,
        date_created,
        priority,
        status,
      });
      alert("Ticket created: " + response.message);
      setTitle("");
      setType("");
      setDescription("");
    } catch (err: any) {
      console.error(err);
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <>
      <div className="top_container">
        <div className="name">
          <img className="logo" src="../src/assets/logo.png" alt="Logo" />
          <h2>Dentalign</h2>
        </div>
        <p className="text">
          We would always love to upgrade our system, to <br />
          provide the best experience for our loyal beloved <br />
          customers.
        </p>
      </div>

      <div className="bottom_container">
        <h1 className="what">What can we do for you?</h1>
        <h6 className="send">
          Submit a ticket, so you will have a <br />
          better experience!
        </h6>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Subject</label>
            <input
              type="text"
              placeholder="Subject goes here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="type">Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select an option</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Clinic Facilities">Clinic Facilities</option>
              <option value="Operational and Administration">Operational and Administration</option>
            </select>

            <label htmlFor="desc">Description</label>
            <textarea
              placeholder="Description goes here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div className="buttons">
              <button
                type="button"
                className="cancel_btn"
                onClick={() => {
                  setTitle("");
                  setType("");
                  setDescription("");
                }}
              >
                Cancel
              </button>
              <button type="submit" className="send_btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TicketAppScreen;
