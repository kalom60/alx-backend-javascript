const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const payment = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };

  res.status(200).send(payment);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
