const Ticket = require('../models/Ticket');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

// Create a new ticket
exports.createTicket = async (req, res) => {
  try {
    const {
      title,
      description,  // <-- Added here
      assignee,
      type,
      priority,
      status,
      userId,      // Usually from authenticated user or req.body
    } = req.body;

    const newTicket = new Ticket({
      ID: uuidv4(),
      title,
      description,  // <-- Set here
      assignee,
      type,
      dateCreated: new Date().toISOString(),
      priority,
      status,
      userId,
    });

    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error creating ticket' });
  }
};

// Update a ticket by ID
exports.updateTicket = async (req, res) => {
  try {
    const updated = await Ticket.findOneAndUpdate(
      { ID: req.params.id },
      req.body,  // description will be updated if present in req.body
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Ticket not found' });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating ticket' });
  }
};

// The rest of the controller remains unchanged
exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching tickets' });
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ ID: req.params.id });
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching ticket' });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const deleted = await Ticket.findOneAndDelete({ ID: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Ticket not found' });
    res.json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error deleting ticket' });
  }
};
