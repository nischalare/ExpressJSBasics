const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello From Express JS!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// npm init
// http://localhost:3000