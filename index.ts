import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { expenses } from "./data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// ========================= HTTP ROUTE FOR FINNANCIAL TRACKING =======================
// Get all expenses
app.get("/expenses", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Success get expenses data",
    expenses,
  });
});

// Get expenses by id
app.get("/expenses/:id", (req: Request, res: Response) => {
  const expense = expenses.filter((item: any) => item.id == req.params.id);

  if (expense.length != 0) {
    res.json({
      message: "Success get expense data by id",
      expense,
    });
  } else {
    res.json({
      message: "Failed get expense data by id",
    });
  }
});

// ================================= TESTING =================================

// Get all
app.get("/", (req: Request, res: Response) => {
  res.send(`Server connected in port: ${port}`);
});

// Get route Testing
app.get("/testing", (req: Request, res: Response) => {
  res.send(`This is route testing`);
});

// Get route with parameter using Testing route
app.get("/testing/:name", (req: Request, res: Response) => {
  res.send(`This is route testing, my name is ${req.params.name}`);
});

// Post
app.post("/", (req: Request, res: Response) => {
  res.send(`Test post`);
});

// Put
app.put("/testing", (req: Request, res: Response) => {
  res.send(`Test put`);
});

// Patch
app.patch("/testing", (req: Request, res: Response) => {
  res.send(`Tes patch`);
});

// Server listen to port
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
