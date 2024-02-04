// const express = require('express');
// const sqlite3 = require('sqlite3');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors())
// app.use(express.json())

// const dbPath =  './db/dua_main.sqlite';
// const db = new sqlite3.Database(dbPath);

// app.get('/getCategory', (req, res) => {
//   db.all('SELECT * FROM category', (err, rows) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.json(rows); 
//     }
//   });
// });

// app.get('/getSubCategory', (req, res) => {
//   db.all('SELECT * FROM sub_category', (err, rows) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.json(rows); 
//     }
//   });
// });

// app.get('/getDua', (req, res) => {
//   db.all('SELECT * FROM dua', (err, rows) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.json(rows); 
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import http from "http";
import { config } from "dotenv";
import app from "./app.js";
import * as logger from "./utils/logger.js";

if (process.env.NODE_ENV !== "production") {
  config();
}
const server = http.createServer(app);

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});