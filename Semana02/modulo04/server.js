const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

// Configura arquivos estáticos (css, js...)
server.use(express.static('public'));

server.use(routes);

// Configura as views
server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.listen(5000, () => {
  console.log('Server is running!');
});