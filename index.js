const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3001;

// Connect to the SQLite database
const db = new sqlite3.Database('your_database.db');

// Define an Express route to retrieve data
app.get('/getData', (req, res) => {
  // Execute a SELECT query
  db.all('SELECT * FROM your_table', (err, rows) => {
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