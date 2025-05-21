const router = require("express").Router();
const appointmentController = require("../../../controllers/v1/bank/appointmentController");
const validateData = require("../../../middlewares/validationMiddleware");
const {
	createAppointmentSchema,
	updateAppointmentSchema,
} = require("../../../schemas/bank/appointment.schema");

router
	.route("/")
	.get(appointmentController.index)
	.post(validateData(createAppointmentSchema), appointmentController.store);

router
	.route("/:id")
	.get(appointmentController.show)
	.patch(validateData(updateAppointmentSchema), appointmentController.update)
	.delete(appointmentController.delete);

module.exports = router;
