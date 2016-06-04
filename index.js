
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
  console.log('body',req.body);
  res.status(200).send(req.body)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

