const router = require("express").Router({ mergeParams: true });
const adminAuthMiddleware = require("../../../middlewares/authMiddleware");

const bankRoute = require("./bankRoute");
const authRoute = require("./authRoute");

router.use("/banks", adminAuthMiddleware, bankRoute);
router.use("/auth", authRoute);

module.exports = router;
