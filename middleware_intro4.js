const express = require('express');
const app = express();

// Middleware functions
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// http://localhost:5000/