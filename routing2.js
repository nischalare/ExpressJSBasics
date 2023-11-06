const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
  res.send('About Us Page');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

// http://localhost:4000
// http://localhost:4000/about 