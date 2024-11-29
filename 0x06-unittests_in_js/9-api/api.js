const express = require('express');

const app = express();
const PORT = 7865;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with :id validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
