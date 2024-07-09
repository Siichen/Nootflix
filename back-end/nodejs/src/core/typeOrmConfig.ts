import { DataSource } from "typeorm";
import "./envconfig";
import "reflect-metadata";
import path from "node:path";
import dotenv from "dotenv";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DB_HOST,
  // entities: [],
});

AppDataSource.initialize() // promise
  .then(() => {
    console.log("Make connection!~~~~~~~");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
