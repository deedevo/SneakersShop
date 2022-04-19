const express = require("express");
const app = express();
const port = 3000;
app.use("/", require("./routes/root"));
app.use("/about", require("./routes/about"));
app.use("/shop", require("./routes/shop"));
app.use("/contact", require("./routes/contact"));
app.use("/shop-single", require("./routes/shop-single"));
app.use("/home", require("./routes/index"));
app.use(express.static('public'));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
