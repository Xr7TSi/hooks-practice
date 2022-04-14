const express = require('express');
const router = express.Router();
const { insertTicket, getAllTickets } = require('../models/Ticket.model');

// this is the post http://localhost:5000/api/ticket route
router.post('/', async (req, res) => {
    try {
        const { subject } = req.body; 

        const ticketObj = {
            subject
        };

        const result = await insertTicket(ticketObj);

        if(result._id) {
            res.status(200).json({
                message: 'Ticket created successfully',
            });
        }
    } catch (error) {
        console.log("Error at router.post / " + error);
    }
});


// this is the get http://localhost:5000/api/ticket/all-tickets route
router.get("/all-tickets", async (req, res) => {
    try {
        const result = await getAllTickets();
        return res.json({ status: "success", result });
    } catch (error) {
        console.log("Error at router.get / " + error);
    }
    
});


module.exports = router;