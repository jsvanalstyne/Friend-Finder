

var friends = require("../data/friends");

module.exports = function (app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        var newFriend = req.body;
        
        var newFriendScores= (newFriend.score);
        console.log("line 13" + newFriendScores);
        for(var i=0; i<newFriendScores.length; i++){
            console.log(newFriendScores[i]);
        }
        // Compare the newFriend scores to all of the existing friends and return the friend with the best score. 
        var currentMatch;
        var currentScore = 50;
        // Loop over the friends list and inside the loop
        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            // Loop over the scores inside the current friend
            var friendObjectScore = friends[i].score;
            // Get the difference between the two scores (current friend and new friend)
            console.log("line 25" +friendObjectScore);
            for (var j = 0; j < friendObjectScore.length; j++) {
                // increase var difference by difference of friends.
                    console.log("line 28"  +newFriendScores[i]);
                difference += Math.abs(parseInt(friendObjectScore[j]) - parseInt(newFriendScores[j]));
                console.log("LIne 30 " +difference);
            }
        
        // Once this loop completes, compare the difference to currentScore

        if (difference < currentScore) {
            currentMatch = friends[i];
            currentScore = difference;
        }
    }
        console.log(currentMatch);
        console.log("line 41 " + currentMatch);
        res.json(currentMatch);
        friends.push(newFriend);
    })
}


