const express = require("express");
const app = express();
const port = 3000;
const https = require('https');
app.set('views', './views');
app.set('views engine', 'ejs');
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


const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}))

app.post('/',(req,res)=>{
    let cityname = req.body.city
    let key = "5dec78c131-c3d369196f-rampmo";
    let url = "https://api.fastforex.io/convert?from=USD&to=KZT&amount="+cityname +"&api_key="+key
    https.get(url, function (response){
        response.on('data', data=>{
            console.log(data);
            let a = JSON.parse(data);
            let cond = a.result.KZT;
            res.send("weather in "+cityname+" is: "+ cond)
        })
    });
})
