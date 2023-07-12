const { v4: uuidv4 } = require("uuid");

const transactions = [
  {
    id: uuidv4(),
    item_name: "Paycheck",
    amount: 2500,
    date: "April 1, 2023",
    from: "New York Unified Court System",
    category: "Income",
  },
  {
    id: uuidv4(),
    item_name: "Taxes",
    amount: -300,
    date: "April 1, 2023",
    from: "NYS",
    category: "Taxes",
  },
  {
    id: uuidv4(),
    item_name: "Retirement",
    amount: -200,
    date: "April 1, 2023",
    from: "Deferred Compensation",
    category: "Retirement",
  },
  {
    id: uuidv4(),
    item_name: "Savings",
    amount: -100,
    date: "April 1, 2023",
    from: "Me",
    category: "Savings",
  },
  {
    id: uuidv4(),
    item_name: "Credit Card Payment",
    amount: -100,
    date: "April 2, 2023",
    from: "MasterCard",
    category: "Consumer Debt",
  },
  {
    id: uuidv4(),
    item_name: "Birthday Money",
    amount: 20,
    date: "April 5, 2023",
    from: "Auntie Zell",
    category: "Gift",
  },
  {
    id: uuidv4(),
    item_name: "Coffee",
    amount: -4,
    date: "April 5, 2023",
    from: "Starbucks",
    category: "Food",
  },
  {
    id: uuidv4(),
    item_name: "Internet",
    amount: -173.68,
    date: "April 5, 2023",
    from: "Optimum",
    category: "Utility",
  },
  {
    id: uuidv4(),
    item_name: "Pet Food",
    amount: -47.62,
    date: "April 11, 2023",
    from: "Stop N Shop",
    category: "Pet Food",
  },
  {
    id: uuidv4(),
    item_name: "Hair Salon",
    amount: -260,
    date: "April 13, 2023",
    from: "Glow Hair and Nails",
    category: "Personal",
  },
];

module.exports = transactions;
