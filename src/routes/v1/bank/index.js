const router = require("express").Router({ mergeParams: true });
const adminAuthMiddleware = require("../../../middlewares/authMiddleware");

const bloodRequestRoute = require("./bloodRequestRoute");
const donorRoute = require("./donorRoute");
const appointmentRoute = require("./appointmentRoute");
const authRoute = require("./authRoute");

router.use("/donors", adminAuthMiddleware, donorRoute);
router.use("/requests", adminAuthMiddleware, bloodRequestRoute);
router.use("/appointments", adminAuthMiddleware, appointmentRoute);
router.use("/auth", authRoute);

module.exports = router;
