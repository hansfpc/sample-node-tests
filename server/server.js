const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000);