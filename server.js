var express = require("express");
var app= express();
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.json());
// allows us to receive json objects(access to req.body)
app.use(express.urlencoded({ extended: true }));
// allows us to receive and send data through urls. (allows us :character req.params.name) 


require( './app/routing/htmlRoutues')(app);
require( './app/routing/apiRoutes')(app);



app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});