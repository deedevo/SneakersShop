const express = require("express");
const router = express.Router();
let path = require('path');
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve('public/about.ejs')))
    .post((req, res) => res.send("POST ABOUT"));
module.exports = router;