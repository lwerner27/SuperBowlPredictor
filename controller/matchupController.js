const db = require("../model")

module.exports = {
    addMatchups: function(req, res) {
        db.Matchup
        .insertMany(req.body.userPicks)
        .then((MatchupModel) => {
            res.json(MatchupModel)
        }) 
        .catch(err => res.json(err));
    }
}