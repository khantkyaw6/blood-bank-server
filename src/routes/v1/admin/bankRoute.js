const router = require("express").Router();
const bankController = require("../../../controllers/v1/admin/bankController");

router.route("/").get(bankController.index).post(bankController.store);

router
	.route("/:id")
	.get(bankController.show)
	.patch(bankController.update)
	.delete(bankController.delete);

module.exports = router;
