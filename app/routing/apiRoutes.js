var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        // This will be used to handle incoming survey results. 
        friendsData.push(req.body);
        var currentScore = req.body.scores;
        // console.log(req.body.scores);
        // console.log("*******");
        // console.log(friendsData[1].scores);
        // This route will also be used to handle the compatibility logic.
      for (var i = 0; i < friendsData.length; i++) {
          var
      }
    });
}

// function runScores() {

// }