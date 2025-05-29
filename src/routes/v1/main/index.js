const router = require("express").Router({ mergeParams: true });

const bankRoute = require("./bankRoute");
const bloodRequestRoute = require("./bloodRequestRoute");
const donorRoute = require("./donorRoute");

router.use("/donors", donorRoute);
router.use("/requests", bloodRequestRoute);
router.use("/banks", bankRoute);

module.exports = router;
