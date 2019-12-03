

var friends = require("../data/friends");

module.exports = function (app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        var newFriend = req.body;
        var newFriendScores= parseInt(newFriend.scores);

        // Compare the newFriend scores to all of the existing friends and return the friend with the best score. 
        var currentMatch;
        var currentScore = 50;
        // Loop over the friends list and inside the loop
        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            // Loop over the scores inside the current friend
            var friendObject = friends[i].score;
            // Get the difference between the two scores (current friend and new friend)
            for (var j = 0; j < newFriendScores.length; j++) {
                // increase var difference by difference of friends.
                difference += Math.abs(friendObject[j] - newFriendScores[j]);
            }
        }
        // Once this loop completes, compare the difference to currentScore

        if (difference < currentScore) {
            currentMatch = newFriendScores[i];
            currentScore = difference;
        }
        res.json(currentMatch);
        friends.push(newFriend);
    })
}


