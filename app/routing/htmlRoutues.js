var express = require("express");
var path = require("path");
var app= express();
var PORT = 3000;
app.listen(PORT, function(){
    console.log("Port is listening on "+ PORT);
});

app.get("/survey", function(req, response){
    response.sendFile(path.resolve(__dirname, "../public/survey.html"))
});
app.get("*", function(req, response){
    response.sendFile(path.resolve(__dirname, "../public/home.html"))
});



