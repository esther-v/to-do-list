const express = require('express');
const ejs = require('ejs');

const router = require("./routers");

const server = express();

server.engine("ejs", ejs.renderFile);
server.set("views", "./src/views");
server.use(express.static("./src/static"));

server.use(express.urlencoded());

server.use(router);

server.listen(8080, () => {
    console.log("Server running at port 8080");
})


