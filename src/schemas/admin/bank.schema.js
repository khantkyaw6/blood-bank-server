const { z } = require("zod");
const { PHONE_NUMBER_REGEX } = require("../../constants/regex");

const createBankSchema = z
	.object({
		email: z.string().email("Email must be a valid email address"),
		password: z
			.string()
			.min(6, "Password must be at least 6 characters long"),
		title: z.string().min(1, "Title is required"),
		description: z.string().optional(),
		address: z.string().min(1, "Address is required"),
		city: z.string().min(1, "City is required"),
		phone: z.string().regex(PHONE_NUMBER_REGEX, {
			message: "Phone number is not valid",
		}),
		status: z
			.enum(["active", "suspend"], {
				message: "Status must be either 'active' or 'suspend'",
			})
			.optional(),
	})
	.strict();

const updateBankSchema = z
	.object({
		email: z
			.string()
			.email("Email must be a valid email address")
			.optional(),
		title: z.string().optional(),
		description: z.string().optional(),
		address: z.string().optional(),
		city: z.string().optional(),
		phone: z
			.string()
			.regex(PHONE_NUMBER_REGEX, {
				message: "Phone number is not valid",
			})
			.optional(),
		status: z
			.enum(["active", "suspend"], {
				message: "Status must be either 'active' or 'suspend'",
			})
			.optional(),
	})
	.strict();

module.exports = {
	createBankSchema,
	updateBankSchema,
};
