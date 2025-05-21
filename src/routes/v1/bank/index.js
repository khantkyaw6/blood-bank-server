const router = require("express").Router({ mergeParams: true });

const bloodRequestRoute = require("./bloodRequestRoute");
const donorRoute = require("./donorRoute");
const appointmentRoute = require("./appointmentRoute");

router.use("/donors", donorRoute);
router.use("/requests", bloodRequestRoute);
router.use("/appointments", appointmentRoute);

module.exports = router;
