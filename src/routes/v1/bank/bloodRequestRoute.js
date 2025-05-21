const router = require("express").Router();
const requestController = require("../../../controllers/v1/bank/requestController");
const validateData = require("../../../middlewares/validationMiddleware");
const {
	createBloodRequestSchema,
	updateBloodRequestSchema,
} = require("../../../schemas/bank/request.schema");
router
	.route("/")
	.get(requestController.index)
	.post(validateData(createBloodRequestSchema), requestController.store);

router
	.route("/:id")
	.get(requestController.show)
	.patch(validateData(updateBloodRequestSchema), requestController.update)
	.delete(requestController.delete);

module.exports = router;
