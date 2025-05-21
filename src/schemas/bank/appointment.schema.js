const { z } = require("zod");

const createAppointmentSchema = z
	.object({
		donor: z.string().min(1, "Donor ID is required"),
		bloodRequest: z.string().min(1, "Blood Request ID is required"),
		date: z
			.string()
			.or(z.date())
			.refine(
				(val) => {
					const date = new Date(val);
					return !isNaN(date.getTime());
				},
				{
					message: "Appointment date must be a valid date/time",
				}
			),
		bank: z.string().min(1, "Bank ID is required"),
	})
	.strict();

const updateAppointmentSchema = z
	.object({
		donor: z.string().min(1, "Donor ID cannot be empty").optional(),
		bloodRequest: z
			.string()
			.min(1, "Blood Request ID cannot be empty")
			.optional(),

		date: z
			.string()
			.or(z.date())
			.refine(
				(val) => {
					const date = new Date(val);
					return !isNaN(date.getTime());
				},
				{
					message: "Appointment date must be a valid date/time",
				}
			)
			.optional(),
		bank: z.string().min(1, "Bank ID cannot be empty").optional(),
	})
	.strict();

module.exports = {
	createAppointmentSchema,
	updateAppointmentSchema,
};
