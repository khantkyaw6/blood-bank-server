const router = require("express").Router();
const donorController = require("../../../controllers/v1/bank/donorController");
const validateData = require("../../../middlewares/validationMiddleware");
const {
	createDonorSchema,
	updateDonorSchema,
} = require("../../../schemas/bank/donor.schema");
const paginationValidateMiddleware = require("../../../middlewares/paginationValidateMiddleware");

router.route("/report").get(donorController.report);

router
	.route("/")
	.get(paginationValidateMiddleware, donorController.index)
	.post(validateData(createDonorSchema), donorController.store);

router
	.route("/:id")
	.get(donorController.show)
	.patch(validateData(updateDonorSchema), donorController.update)
	.delete(donorController.delete);

module.exports = router;
