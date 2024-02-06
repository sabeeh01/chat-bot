var path = require("path");
var express = require("express");
const http = require('http');
const logger = require('morgan');
const app = express();
const port = 8080;

app.use(logger('dev'));

app.use( '/' ,express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build' , '/index.html'));
});

app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`listing on port ${port}`);
});