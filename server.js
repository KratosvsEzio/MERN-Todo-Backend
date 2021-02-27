const http = require('http');     // 1
const app = require('./app');     // 2

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || "7000";
app.set("port", port);      // 3

const server = http.createServer(app);      //4

server.listen(port);      // 5