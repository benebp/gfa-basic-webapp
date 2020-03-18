'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('MOD17: malacok-27, hello, mamma mia');
});

app.listen(PORT);