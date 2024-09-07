const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("dlkbcfdbcdj");
});

app.listen(3000, () => {
  console.log(" thi port is on the 3000");
});
