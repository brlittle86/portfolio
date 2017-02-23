'use strict';

const pg = require('pg');
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const conString = `${process.env.DATABASE_URL}`;
const client = new pg.Client(conString);
client.connect();

const PORT = process.env.PORT || 8686;
const conString = `${process.env.DATABASE_URL}`;

app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));

app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('', (request, response) => {

  response.sendFile('index.html', { root: './public' });
});

app.listen(PORT, () => {
  console.log('Our amazing server app is being served at localhost:' + PORT);

});