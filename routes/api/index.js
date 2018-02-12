const router = require("express").Router();
const userRoutes = require("./user-api");

// User routes
router.use(userRoutes);

module.exports = router;