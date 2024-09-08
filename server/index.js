const { urlencoded } = require("express");
const express = require("express");
const app = express();
const apiRoutes = require("./routes/auth.routes.js");
const dotenv = require("dotenv");
app.use(urlencoded({ extended: true }));
app.use(express.json());

const { connectDB } = require("./db/connectedDB.js");
dotenv.config();

app.get("/", (req, res) => {
  res.send("dlkbcfdbcdj");
});

app.use("/api/auth", apiRoutes);
app.listen(3000, () => {
  connectDB();
  console.log(" thi port is on the 3000");
});
