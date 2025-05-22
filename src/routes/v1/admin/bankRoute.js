const router = require("express").Router();
const bankController = require("../../../controllers/v1/admin/bankController");
const validateData = require("../../../middlewares/validationMiddleware");
const {
	createBankSchema,
	updateBankSchema,
} = require("../../../schemas/admin/bank.schema");
const paginationValidateMiddleware = require("../../../middlewares/paginationValidateMiddleware");

router
	.route("/")
	.get(paginationValidateMiddleware, bankController.index)
	.post(validateData(createBankSchema), bankController.store);

router
	.route("/:id")
	.get(bankController.show)
	.patch(validateData(updateBankSchema), bankController.update)
	.delete(bankController.delete);

module.exports = router;
