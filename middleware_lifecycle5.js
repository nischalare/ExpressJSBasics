const express = require('express');
const app = express();

// Middleware functions

// A request handler with access to the application's request-response cycle is known as middleware. 
// It's a function that holds the request object, the response object, and the middleware function. 
// Middleware can also send the response to the server before the request.

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

app.listen(7000, () => {
  console.log('Server is running on port 7000');
});

// http://localhost:7000