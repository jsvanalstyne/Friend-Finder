

var friends = require("../data/friends");

module.exports = function(app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function(req, res) {
     return  res.json(friends);
    });}
    // Create comparison of user to all of the freinds in the array. 

    