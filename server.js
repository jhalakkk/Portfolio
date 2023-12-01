// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port number

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Example backend function (replace with your own logic)
app.post('/api/sendMessage', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Perform some backend logic (e.g., send an email, save to a database)

  // Respond to the client
  res.json({ success: true, message: 'Message received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
