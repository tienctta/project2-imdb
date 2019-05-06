var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('trust proxy', 1)// trust first proxy
app.use(session({
    secret: config.get("secret_key"),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
}));

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/public"));

var controller = require(__dirname + "/apps/controllers");
app.use(controller);

var host = config.get("server.host");
var port = config.get("server.port");

var server = app.listen(port, host, function(){
    console.log("server running on port", port);

});