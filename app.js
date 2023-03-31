const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const myDate = new Date();
  res.send(
    `${myDate.getDate()}-${myDate.getMonth() + 1}-${myDate.getFullYear}`
  );
});

module.exports = app;
