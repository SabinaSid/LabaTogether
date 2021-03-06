const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

var port = process.env.PORT || 80;
let app = express();


app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, ()=>{
    console.info(`App run on http://localhost:${port}`);
});
