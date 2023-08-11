import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { expenses } from "./data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

// ========================= HTTP ROUTE FOR FINNANCIAL TRACKING =======================

// GET: to get all expenses data
app.get("/expenses", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Success get expenses data ✅",
    expenses,
  });
});

// GET by id: to get expense data by id
app.get("/expenses/:id", (req: Request, res: Response) => {
  const expense = expenses.filter((item: any) => item.id == req.params.id);

  if (expense.length != 0) {
    res.json({
      message: "Success get expense data by id ✅",
      expense,
    });
  } else {
    res.json({
      message: "Failed get expense data by id 😥",
    });
  }
});

// POST: to add new expense data
app.post("/expenses", (req: Request, res: Response) => {
  // console.log(req.body);

  // Push new data to expenses array
  expenses.push(req.body);
  // console.log(expenses);

  res.json({
    message: "Success adding new expense data ✅",
    expenses,
  });
});

// PUT: to updates existing data with given id
app.put("/expenses/:id", (req: Request, res: Response) => {
  const idToUpdate = parseInt(req.params.id);
  const updatedExpense = req.body;

  const index = expenses.findIndex((expense) => expense.id === idToUpdate);

  if (index !== -1) {
    expenses[index] = { ...expenses[index], ...updatedExpense };
    res.json({
      message: "Success updating expense data ✅",
      updatedExpense: expenses[index],
    });
  } else {
    res.status(404).json({
      message: "Expense not found for update 😥",
    });
  }
});

// DELETE: to delete existing data with given id

// ================================= TESTING =================================

// Get all
app.get("/", (req: Request, res: Response) => {
  res.send(
    `Welcome to Financial Tracking app! Try /expenses to get the data. 💡`
  );
});

// Server listen to port
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
