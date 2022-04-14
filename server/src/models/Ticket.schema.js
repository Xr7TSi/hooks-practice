const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    subject: {
      type: String,
      maxLength: 100,
      required: true,
      default: "",
    },
    openedAt: {
      type: Date,
      default: Date.now(),
    },

  });
  
  module.exports = {
   
    TicketSchema: mongoose.model("Ticket", TicketSchema),
  };
  