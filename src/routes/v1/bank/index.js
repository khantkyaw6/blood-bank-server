const router = require("express").Router({ mergeParams: true });

const bloodRequestRoute = require("./bloodRequestRoute");
const donorRoute = require("./donorRoute");
const appointmentRoute = require("./appointmentRoute");
const authRoute = require("./authRoute");

router.use("/donors", donorRoute);
router.use("/requests", bloodRequestRoute);
router.use("/appointments", appointmentRoute);
router.use("/auth", authRoute);

module.exports = router;
