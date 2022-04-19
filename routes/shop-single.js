const express = require("express");
const router = express.Router();
let path = require('path');
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve('public/shop-single.ejs')))
    .post((req, res) => res.send("POST SHOP-SINGLE"));
module.exports = router;