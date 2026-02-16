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

        const checkDataQuery = 'SELECT COUNT(*) AS count FROM responses';
        db.query(checkDataQuery, (err, results) => {
          if (err) throw err;
          if (results[0].count === 0) {
            const insertData = [
              ['Hej!', 'Hej på dig! Jag heter Chatbot. Hur är läget?'],
              ['Jag mår bra.', 'Trevligt att höra! Mina egna kretsar är också fullt funktionella.'],
              ['Vad kan du göra?', 'Jag kan svara på frågor baserat på min databas. Fråga mig något!'],
              ['Hur mår du?', 'Jag mår alltid bra som en dator! Vad kan jag hjälpa dig med?'],
              ['Vad är klockan?', 'Jag har ingen klocka, men det är dags att prata!'],
              ['Berätta en vits.', 'Varför gick datorn till läkaren? För att den hade virus!'],
              ['Vad är ditt namn?', 'Mitt namn är Chatbot. Vad heter du?'],
              ['Tack!', 'Varsågod! Kom tillbaka snart.'],
              ['Hejdå!', 'Hejdå! Ha en bra dag!'],
              ['Hjälp!', 'Jag kan hjälpa dig med enkla frågor. Vad behöver du hjälp med?']
            ];
            const insertQuery = 'INSERT INTO responses (input, output) VALUES ?';
            db.query(insertQuery, [insertData], (err) => {
              if (err) throw err;
              console.log('Sample data inserted');
            });
          }
        });
      });
    });
  });
});
