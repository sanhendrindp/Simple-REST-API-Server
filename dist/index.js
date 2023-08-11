"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.json());
// ========================= HTTP ROUTE FOR FINNANCIAL TRACKING =======================
// GET: to get all expenses data
app.get("/expenses", (req, res) => {
    res.status(200).json({
        message: "Success get expenses data ✅",
        expenses: data_1.expenses,
    });
});
// GET by id: to get expense data by id
app.get("/expenses/:id", (req, res) => {
    const expense = data_1.expenses.filter((item) => item.id == req.params.id);
    if (expense.length != 0) {
        res.json({
            message: "Success get expense data by id ✅",
            expense,
        });
    }
    else {
        res.json({
            message: "Failed get expense data by id 😥",
        });
    }
});
// POST: to add new expense data
app.post("/expenses", (req, res) => {
    // console.log(req.body);
    // Push new data to expenses array
    data_1.expenses.push(req.body);
    // console.log(expenses);
    res.json({
        message: "Success adding new expense data ✅",
        expenses: data_1.expenses,
    });
});
// PUT: to updates existing data with given id
app.put("/expenses/:id", (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const updatedExpense = req.body;
    const index = data_1.expenses.findIndex((expense) => expense.id === idToUpdate);
    if (index !== -1) {
        data_1.expenses[index] = Object.assign(Object.assign({}, data_1.expenses[index]), updatedExpense);
        res.json({
            message: "Success updating expense data ✅",
            updatedExpense: data_1.expenses[index],
        });
    }
    else {
        res.status(404).json({
            message: "Expense not found for update 😥",
        });
    }
});
// DELETE: to delete existing data with given id
// ================================= TESTING =================================
// Get all
app.get("/", (req, res) => {
    res.send(`Welcome to Financial Tracking app! Try /expenses to get the data. 💡`);
});
// Server listen to port
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
