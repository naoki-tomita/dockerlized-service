const express = require("express");
const router = express.Router();

const CONTENT_TYPE = { "content-type": "application/json;charset=utf-8" };
const users = [
  "adachi", "inoue", "ueda", "emura", "ohtsuki", "katoh", "kirimura", "kuriyama", "koyama",
  "satoh", "simoyama", "suruga", "seto", "sohda", "tamura", "chikayama", "tsurumi", "tegoshi", "tomita"
].map((name, id) => ({ name, id, }));

router.get("/", (_, res) => {
  res.writeHead(200, { ...CONTENT_TYPE });
  res.end(JSON.stringify(users));
});

router.get("/:id", (req, res) => {
  res.writeHead(200, { ...CONTENT_TYPE });
  res.end(JSON.stringify(users[req.params.id]));
});

function error(res, errorMessage) {
  res.writeHead(400, { ...CONTENT_TYPE });
  res.end(JSON.stringify({ error: errorMessage }));
}

router.post("/", (req, res) => {
  if (!req.body.name) {
    return error(res, `Absent parameters "name"`);
  }
  const newUser = { id: users.length, name: req.body.name };
  users.push(newUser);
  console.log("User added.", newUser);
  res.writeHead(200, { ...CONTENT_TYPE });
  res.end(JSON.stringify(newUser));
});

module.exports = router;
