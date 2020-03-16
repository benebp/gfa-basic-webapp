'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('MOD 3: Welcome to this useless webapp. I have no other function, just to display this message to you.');
});

app.listen(PORT);