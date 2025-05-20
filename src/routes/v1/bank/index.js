const router = require("express").Router({ mergeParams: true });

const bloodRequestRoute = require("./bloodRequestRoute");
const donorRoute = require("./donorRoute");

router.use("/donors", donorRoute);
router.use("/requests", bloodRequestRoute);

module.exports = router;
