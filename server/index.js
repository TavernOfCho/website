const express = require('express');
const app = express();
// const persosRouter = require('./routes/persos'); // Using route for example


app.get('/', function (req, res) {
  res.send('Hello, you are on the server root !');
});

app.listen(3000, () => console.log('Listening on port 3000'));
