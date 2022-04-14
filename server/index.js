
require("dotenv").config();


const express = require("express");
const app = express();


const mongoose = require("mongoose");
const cors = require("cors");

const morgan = require("morgan");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


const ticketRouter = require("./src/routers/ticket.router");

app.use("/api/ticket", ticketRouter);


const PORT = process.env.PORT || 5000;

const CONNECTION_URL = process.env.CONNECTION_URL;


mongoose
  .connect(CONNECTION_URL, {
    useNEWUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log(err.message));

if (process.env.NODE_ENV !== "production") {
  const mDb = mongoose.connection;

  mDb.on("open", () => {
    console.log("MongoDB is connected");
  });

  mDb.on("error", (error) => {
    console.log("MongoDB error", error);
  });

  
  app.use(morgan("tiny"));
}
