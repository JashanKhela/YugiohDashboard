const express = require("express");

const router = express.Router();

// @route Get Duelists
// @desc Duelist Route
// @acess Public

router.get("/", (req, res) => res.send("Duelist Route"));

module.exports = router;
