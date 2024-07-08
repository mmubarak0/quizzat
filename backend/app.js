const express = require('express');
const app = express();
const cors = require('cors');
// const mongodb = require('mongodb');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World', statusCode: 200 });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found', statusCode: 404 });
});

module.exports = app;
