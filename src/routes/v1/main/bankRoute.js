const router = require("express").Router();
const bankController = require("../../../controllers/v1/main/bankController");

router.route("/").get(bankController.index);

module.exports = router;
