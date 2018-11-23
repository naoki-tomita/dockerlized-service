const express = require("express");
const parser = require("body-parser");
const users = require("./users");
const app = express();

app.use(parser.json());
app.use("/users", users);

app.listen(80);