const router = require("express").Router({ mergeParams: true });
const bankRoute = require("./bankRoute");

router.use("/banks", bankRoute);

module.exports = router;
