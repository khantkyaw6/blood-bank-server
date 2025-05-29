const router = require("express").Router();
const donorController = require("../../../controllers/v1/main/donorController");
const validateData = require("../../../middlewares/validationMiddleware");
const {
	createDonarSchemaFromMain,
} = require("../../../schemas/bank/donor.schema");

router
	.route("/")
	.post(validateData(createDonarSchemaFromMain), donorController.store);

module.exports = router;
