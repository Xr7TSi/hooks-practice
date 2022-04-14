const { TicketSchema } = require("../models/Ticket.schema");

const insertTicket = (newTicketObj) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema(newTicketObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject("Error at TicketSchema.save / " + error));
    } catch (error) {
      console.log("Error at insertTicket / " + error);
    }
  });
};


const getAllTickets = () => {
    return new Promise((resolve, reject) => {
        try {
        TicketSchema.find()
            .then((data) => resolve(data))
            .catch((error) => reject("Error at TicketSchema.find / " + error));
        } catch (error) {
        console.log("Error at getAllTickets / " + error);
        }
    });
    }


module.exports = {
    insertTicket,
    getAllTickets
};
