import express, { Request, Response } from "express";
import "./core/envconfig";

console.log("Database host from app.ts:", process.env.DB_HOST);

// trigger database connection
import "./core/typeOrmConfig";

// trigger env config
import "./core/envconfig";

// entrance
const app = express();

const port = process.env.PORT || 3000;

app.get("", (req: Request, res: Response) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`server success on ${port}`);
});
