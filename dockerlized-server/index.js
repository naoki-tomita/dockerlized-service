const express = require("express");
const parser = require("body-parser");
const app = express();

const CONTENT_TYPE = { "content-type": "application/json;charset=utf-8" };
const users = [
  "adachi", "inoue", "ueda", "emura", "ohtsuki", "katoh", "kirimura", "kuriyama", "koyama",
  "satoh", "simoyama", "suruga", "seto", "sohda", "tamura", "chikayama", "tsurumi", "tegoshi", "tomita"
].map((name, id) => ({ name, id, }));

app.use(parser.json());
app.get("/users", (_, res) => {
  res.writeHead(200, { ...CONTENT_TYPE });
  res.end(JSON.stringify(users));
});

app.get("/users/:id", (req, res) => {
  res.writeHead(200, { ...CONTENT_TYPE });
  res.end(JSON.stringify(users[req.params.id]));
});

function error(res, errorMessage) {
  res.writeHead(400, { ...CONTENT_TYPE });
  res.end(JSON.stringify({ error: errorMessage }));
}

app.post("/users", (req, res) => {
  if (!req.body.name) {
    return error(res, `Absent parameters "name"`);
  }
  const newUser = { id: users.length, name: req.body.name };
  users.push(newUser);
  console.log("User added.", newUser);
  res.writeHead(200, { ...CONTENT_TYPE });
  res.end(JSON.stringify(newUser));
});

app.listen(80);