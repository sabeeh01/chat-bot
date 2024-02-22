var path = require("path");
var express = require("express");
// const http = require('http');
var https = require("https");
const logger = require("morgan");
const app = express();
const port = 8080;

const certOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/chatbot.sptest.dev/privkey.pem"),
  cert: fs.readFileSync(
    "/etc/letsencrypt/live/chatbot.sptest.dev/fullchain.pem"
  ),
  // ca: fs.readFileSync('./ca_bundle.pem')
};

app.use(logger("dev"));

app.use("/", express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "/index.html"));
});

app.set("port", port);

const server = https.createServer(certOptions, app);

// const server = http.createServer(app);
server.listen(port, () => {
  console.log(`listing on port ${port}`);
});
