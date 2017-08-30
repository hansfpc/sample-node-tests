const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    error: 'Page not found :c',
    name: 'Hans Felipe',
  });
});

app.listen(3000);
module.exports.app = app;