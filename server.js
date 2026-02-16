const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '' // Default
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Create database if not exists
  db.query('CREATE DATABASE IF NOT EXISTS chatbot', (err) => {
    if (err) throw err;
    console.log('Database created or already exists');

    db.changeUser({ database: 'chatbot' }, (err) => {
      if (err) throw err;

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS responses (
          id INT AUTO_INCREMENT PRIMARY KEY,
          input VARCHAR(255) NOT NULL,
          output TEXT NOT NULL
        )
      `;
      db.query(createTableQuery, (err) => {
        if (err) throw err;
        console.log('Table created or already exists');
