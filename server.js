var express = require("express");
var path = require("path");
var app= express();
var bodyParser = require('body-parser');
var router = express.Router();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require(path.join(__dirname, './app/routing/htmlRoutues'))(app);
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// router.get("/")
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});