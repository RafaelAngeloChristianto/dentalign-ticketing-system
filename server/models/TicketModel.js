const mongoose = require('mongoose');

const PriorityType = ['High', 'Medium', 'Low'];
const StatusType = ['Queued', 'In progress', 'Completed'];

const ticketSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  assignee: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  dateCreated: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: PriorityType,
    required: true
  },
  status: {
    type: String,
    enum: StatusType,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Make sure this matches your User model name
    required: true
  }
});

module.exports = mongoose.model('Ticket', ticketSchema);
