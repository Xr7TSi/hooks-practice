import axios from 'axios';

const rootUTL = "api/";
const newTicketURL = rootUTL + "ticket/";
const getAllTicketsURL = rootUTL + "ticket/all-tickets";


export const createNewTicket = (formData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post(newTicketURL, formData);
  
        resolve(result.data);
      } catch (error) {
        console.log(error.message);
        reject("Error at createNewTicket / " + error);
      }
    });
  };

  export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(getAllTicketsURL);
        resolve(result);
      } catch (error) {
        reject("Error at getAllTickets / " + error);
      }
    });
  };