const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchupSchema = new Schema({
    teamOne: {type: String, required: true },
    teamTwo: {type: String, required: true },
    winner: {type: String, required: true }
})


module.exports = mongoose.model('Matchup', MatchupSchema);