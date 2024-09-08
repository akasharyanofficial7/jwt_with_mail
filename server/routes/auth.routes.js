const express = require("express");
const router = express.Router();
const { signUp, logIn } = require("../controllers/auth.controllers.js");
router.get("/signup", signUp);
router.get("/login", logIn);
module.exports = router;
