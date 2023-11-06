const express = require('express');
const app = express();

// Middleware functions
app.use((req, res, next) => {
  console.log('Custom Middleware');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

// http://localhost:4000/