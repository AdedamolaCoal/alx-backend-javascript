const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7865;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Available payments route
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Login route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
