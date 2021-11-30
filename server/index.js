const { application } = require("express");
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ priority: ["Urgent,Regular,Trival"] });
});

app.listen(3001);
