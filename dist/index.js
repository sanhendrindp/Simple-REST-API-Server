"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// HTML route for finnancial tracking
app.get("/expenses", (req, res) => {
    res.json({
        message: "Success get expenses data",
        expenses: data_1.expenses,
    });
});
// ================================= TESTING =================================
// Get all
app.get("/", (req, res) => {
    res.send(`Server connected in port: ${port}`);
});
// Get route Testing
app.get("/testing", (req, res) => {
    res.send(`This is route testing`);
});
// Get route with parameter using Testing route
app.get("/testing/:name", (req, res) => {
    res.send(`This is route testing, my name is ${req.params.name}`);
});
// Post
app.post("/", (req, res) => {
    res.send(`Test post`);
});
// Put
app.put("/testing", (req, res) => {
    res.send(`Test put`);
});
// Patch
app.patch("/testing", (req, res) => {
    res.send(`Tes patch`);
});
// Server listen to port
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
