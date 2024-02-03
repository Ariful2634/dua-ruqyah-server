const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())

// Connect to the SQLite database
const db = new sqlite3.Database('./db/dua_main.sqlite');

// Define an Express route to retrieve data
app.get('/getCategory', (req, res) => {
  // Execute a SELECT query
  db.all('SELECT * FROM category', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows); // Send the data as JSON
    }
  });
});

app.get('/getSubCategory', (req, res) => {
  // Execute a SELECT query
  db.all('SELECT * FROM sub_category', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows); // Send the data as JSON
    }
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});