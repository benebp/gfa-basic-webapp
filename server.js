'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('MOD22: malacok-27, new branch "dev" created');
});

app.listen(PORT);