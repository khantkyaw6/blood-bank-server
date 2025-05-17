const router = require("express").Router();

const adminRoutes = require("./admin");
const bankRoutes = require("./bank");
const mainRoutes = require("./main");

router.use("/admin-dashboard", adminRoutes);
router.use("/bank-dashboard", bankRoutes);
router.use("/main", mainRoutes);

module.exports = router;
