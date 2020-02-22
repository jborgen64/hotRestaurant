// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];
const waiting = [];

const res = {
  customerName: '',
  phoneNumber: '',
  customerEmail: '',
  customerID: '',
}

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});


app.get('/api/tables', (req, res) => {
  return tables;
});

app.get('/api/waiting', (req, res) => {
  return waiting;
});

app.post('/api/tables', (req, res) => {
  res.sendFile(path.join(__dirname, 'tables.html'));
  const data = req.body

  if (tables.length < 6) {
    res.push(data);
  }

  else {
    waiting.push(data);
  }
  
  
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
