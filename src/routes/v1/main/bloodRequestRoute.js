const router = require("express").Router();
const requestController = require("../../../controllers/v1/main/requestController");
const validateData = require("../../../middlewares/validationMiddleware");
const {
	createBloodRequestSchemaForMain,
} = require("../../../schemas/bank/request.schema");
router
	.route("/")
	.post(
		validateData(createBloodRequestSchemaForMain),
		requestController.store
	);

module.exports = router;
