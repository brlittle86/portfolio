'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();

const PORT = process.env.PORT || 8686;

app.use(express.static('./public'));

app.get('', (request, response) => {

  response.sendFile('index.html', { root: './public' });
});

app.listen(PORT, () => {
  console.log('Our amazing server app is being served at localhost:' + PORT);

});