

var friends = require("../data/friends");

module.exports = function (app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function (req, res) {
         res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        console.log(req.body)
        var newFriend= req.body;
        // Compare the newFriend scores to all of the existing friends and return the friend with the best score. 
        var currentMatch;
        var currentScore=50;
        // Loop over the friends list and inside the loop
                // (var difference=0;)
            // Loop over the scores inside the current friend
                // Get the difference between the two scores (current friend and new friend)
                // increase var difference by difference of friends. 
            // Once this loop completes, compare the difference to currentScore

            // if (difference< currentScore){
                // currentMatch= friends[i];
                // currentScore= difference;
            // }
        res.json(currentMatch);
        friends.push(newFriend);
    })
}
    // Create comparison of user to all of the freinds in the array.

