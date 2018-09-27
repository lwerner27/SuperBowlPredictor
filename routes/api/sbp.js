const router = require('express').Router();
const db = require("../../controller");

router.post("/submitMatchups", (req, res) => {
    db.Matchup.addMatchups(req, res)
})

module.exports = router