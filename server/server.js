const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    error: 'Page not found :c',
    name: 'Hans Felipe',
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Mike',
    age: 22,
  },{
    name: 'Hans',
    age: 23,
  },{
    name: 'Anna',
    age: 26,
  }])
});

app.listen(3000);
module.exports.app = app;