var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
         // This route will also be used to handle the compatibility logic.
        var currentScore = req.body.scores;
        var currentDiff = 50;
        var bestMatch; 
        currentScore = runScores(currentScore);

      for (var i = 0; i < friendsData.length; i++) {
        var score = runScores(friendsData[i].scores)
        var diff = Math.abs(score - currentScore);
        if (diff < currentDiff) {
            currentDiff = diff;
            bestMatch = friendsData[i];
        }
    };

    console.log(bestMatch.name);
        // This will be used to handle incoming survey results. 
        friendsData.push(req.body);
        
        // console.log(req.body.scores);
        // console.log("*******");
        // console.log(currentScore);
       
    });
}

function runScores(arr) {
        return arr.reduce(function(a,b){
            return a + b
        }, 0);
};