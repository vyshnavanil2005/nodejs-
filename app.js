const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Project 1: Node.js Web Application Running Successfully!</h1>');
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}`);
});
