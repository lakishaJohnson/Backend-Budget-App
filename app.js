//DEPENDENCIES
const express = require("express");
const cors = require("cors");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

const transactionController = require("./controllers/transactionsController");

//ROUTES
app.use("/transactions", transactionController);

app.get("/", (req, res) => {
  res.send("<h2>Budget that moolah!!</h2>");
});

app.get("*", (req, res) => {
  res.status(401).send(`<img src="https://http.cat/400">`);
});


module.exports = app;