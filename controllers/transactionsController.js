//DEPENDENCIES
const express = require("express");
const transactionsArray = require("../models/transactions");
// console.log(transactionsArray)
const { v4: uuidv4 } = require("uuid");

//CONFIGURATION
const transactions = express.Router();

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
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE
transactions.post("/", (req, res) => {
  const id = uuidv4();

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
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const transactionIndex = transactionsArray.findIndex(
    (transaction) => transaction.id === id
  );
  if (transactionsArray[transactionIndex]) {
    const deleteTransaction = transactionsArray.splice(transactionIndex, 1);
    res.status(200).json(deleteTransaction);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  const transactionIndex = transactionsArray.findIndex(
    (transaction) => transaction.id === id
  );

  if (transactionIndex !== -1) {
    transactionsArray[transactionIndex] = {
      ...transactionsArray[transactionIndex],
      ...req.body,
    };
    res.status(200).json(transactionsArray[transactionIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;
