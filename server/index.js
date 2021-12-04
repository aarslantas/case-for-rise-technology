const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/api", (req, res) => {
  res.json({
    priorities: [
      { priorityName: "Urgent", priorityNumber: 0 },
      { priorityName: "Regular", priorityNumber: 1 },
      { priorityName: "Trival", priorityNumber: 2 },
    ],
  });
});

app.listen(4000);
