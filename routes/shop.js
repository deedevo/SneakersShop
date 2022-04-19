const express = require("express");
const router = express.Router();
let path = require('path');
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve('public/shop.ejs')))
    .post((req, res) => res.send("POST SHOP"));
module.exports = router;