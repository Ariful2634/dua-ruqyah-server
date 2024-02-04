import express from "express";
import cors from "cors";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

import * as middleware from "./utils/middleware.js";
import helloRoute from "./routes/helloRouter.js";
import sqlite3 from 'sqlite3'

const app = express();
// const sqlite3 = require('sqlite3');
// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

// request logger middleware
app.use(morgan("tiny"));

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

// Create the absolute path to the database file
const dbPath = path.join(currentDir, 'db', 'dua_main.sqlite');
console.log(dbPath);
const db = new sqlite3.Database(dbPath);
// healthcheck endpoint
app.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.get('/getCategory', (req, res) => {
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows); 
    }
  });
});

app.get('/getSubCategory', (req, res) => {
  db.all('SELECT * FROM sub_category', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows); 
    }
  });
});

app.get('/getDua', (req, res) => {
  db.all('SELECT * FROM dua', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows); 
    }
  });
});

app.use("/hello", helloRoute);

// custom middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;