//DEPENDENCIES
const express = require("express");
const transactionsArray = require("../models/transactions");
// console.log(transactionsArray)
const { v4: uuidv4 } = require("uuid");

//CONFIGURATION
const transactions = express.Router();
const id = uuidv4(); // Generates a unique ID

//INDEX
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//SHOW
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  const transaction = transactionsArray.find(
    (transaction) => transaction.id === id
  );

  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("*");
  }
});

// CREATE
transactions.post("/", (req, res) => {
  const { item_name, amount, date, from, category } = req.body;

  const newTransaction = {
    id,
    item_name,
    amount,
    date,
    from,
    category,
  };
  transactionsArray.push(newTransaction);
  res.json(newTransaction);
});

// DELETE
transactions.delete("/:arrayIndex", (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    const deleteTransaction = transactionsArray.splice(
      req.params.arrayIndex,
      1
    );
    res.status(200).json(deleteTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
transactions.put("/:arrayIndex", (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    transactionsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;
