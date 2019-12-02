var express = require("express");
var path = require("path");
var app= express();
// var bodyParser = require('body-parser');
var PORT = 3000;
app.use(express.json());
// allows us to receive json objects(access to req.body)
app.use(express.urlencoded({ extended: true }));
// allows us to receive and send data through urls. (allows us :character req.params.name) 


require( './app/routing/htmlRoutues')(app);
require( './app/routing/apiRoutes')(app);



app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});