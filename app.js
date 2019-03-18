var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose")

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})


app.listen(3000, function () {
    console.log("the server has started");
});