const router = require("express").Router({ mergeParams: true });
const bankRoute = require("./bankRoute");
const authRoute = require("./authRoute");

router.use("/banks", bankRoute);
router.use("/auth", authRoute);

module.exports = router;
