const router = require("express").Router()
const sbpRoutes = require("./sbp");

// routes
router.use("/sbp", sbpRoutes);

module.exports = router;