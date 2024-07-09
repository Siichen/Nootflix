import path from "node:path";
import dotenv from "dotenv";

const envPath =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({
  path: path.resolve(__dirname, "../../", envPath),
});

console.log(
  "Loaded environment variables from:",
  path.resolve(__dirname, "../../", envPath)
);
console.log("Database host:", process.env.DB_HOST);
