const express = require("express");
const router = express.Router();

//Route POST api/input
//Description show the input
//Access Public

router.post("/", (req, res) => res.send("input api"));

module.exports = router;
