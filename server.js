'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8686;

app.use(express.static('./public'));

app.get('', (request, response) => {
<<<<<<< HEAD
  response.sendFile('index.html', { root: './public' });
});

app.listen(PORT, () => {
  console.log('Our amazing server app is being served at localhost:' + PORT);
=======
  response.sendFile('index.html', { root: './public'});
});

app.listen(PORT, () => {
  console.log('Our amazing server app is being served at localhost:'+PORT);
>>>>>>> 94f5ec41d2f906c12ae2837a017f6134a01542ce
});