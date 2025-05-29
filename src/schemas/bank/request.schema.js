const z = require("zod");
const { PHONE_NUMBER_REGEX } = require("../../constants/regex");

const createBloodRequestSchemaForMain = z
	.object({
		bank: z.string().min(1, "Bank is required"),
		name: z.string().min(1, "Name is required"),
		phone: z.string().regex(PHONE_NUMBER_REGEX, {
			message: "Phone number is not valid",
		}),
		email: z
			.string()
			.email("Email must be a valid email address")
			.min(1, "Email is required"),
		address: z.string().min(1, "Address is required"),
		age: z.number().min(0, "Age must be a non-negative number"),
		bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
			message:
				"Blood type must be a valid type (A+, A-, B+, B-, AB+, AB-, O+, O-)",
		}),

		unit: z.number().min(1, "Unit must be at least 1"),
		status: z
			.enum(["pending", "approved", "rejected", "fulfilled"], {
				message:
					"Status must be one of 'pending', 'approved', 'rejected', or 'fulfilled'",
			})
			.optional()
			.default("pending"),
	})
	.strict();

const createBloodRequestSchema = z
	.object({
		name: z.string().min(1, "Name is required"),
		phone: z.string().regex(PHONE_NUMBER_REGEX, {
			message: "Phone number is not valid",
		}),
		email: z
			.string()
			.email("Email must be a valid email address")
			.min(1, "Email is required"),
		address: z.string().min(1, "Address is required"),
		age: z.number().min(0, "Age must be a non-negative number"),
		bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
			message:
				"Blood type must be a valid type (A+, A-, B+, B-, AB+, AB-, O+, O-)",
		}),

		unit: z.number().min(1, "Unit must be at least 1"),
		status: z
			.enum(["pending", "approved", "rejected", "fulfilled"], {
				message:
					"Status must be one of 'pending', 'approved', 'rejected', or 'fulfilled'",
			})
			.optional()
			.default("pending"),
	})
	.strict();

const updateBloodRequestSchema = z
	.object({
		name: z.string().min(1, "Name cannot be empty").optional(),
		phone: z
			.string()
			.regex(PHONE_NUMBER_REGEX, {
				message: "Phone number is not valid",
			})
			.optional(),
		email: z
			.string()
			.email("Email must be a valid email address")
			.optional(),
		address: z.string().min(1, "Address cannot be empty").optional(),
		age: z.number().min(0, "Age must be a non-negative number").optional(),
		bloodType: z
			.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
				message:
					"Blood type must be a valid type (A+, A-, B+, B-, AB+, AB-, O+, O-)",
			})
			.optional(),
		unit: z.number().min(1, "Unit must be at least 1").optional(),
		status: z
			.enum(["pending", "approved", "rejected", "fulfilled"], {
				message:
					"Status must be one of 'pending', 'approved', 'rejected', or 'fulfilled'",
			})
			.optional(),
	})
	.strict();

module.exports = {
	createBloodRequestSchemaForMain,
	createBloodRequestSchema,
	updateBloodRequestSchema,
};
