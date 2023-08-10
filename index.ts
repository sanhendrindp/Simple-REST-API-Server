import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Get all
app.get("/", (req: Request, res: Response) => {
  res.send(`Server connected in port: ${port}`);
});

// Server listen to port
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
