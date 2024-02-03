const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('./db/dua_main.sqlite');

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});