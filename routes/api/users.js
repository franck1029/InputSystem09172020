const express = require("express");
const router = express.Router();

//Route POST api/users
//Description register a user
//Access Public

router.post("/", (req, res) => res.send("users api"));

module.exports = router;
