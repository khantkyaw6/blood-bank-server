const { z } = require("zod");
const { PHONE_NUMBER_REGEX } = require("../../constants/regex");

const createDonarSchemaFromMain = z
	.object({
		name: z.string().min(1, "Name is required"),
		phone: z.string().regex(PHONE_NUMBER_REGEX, {
			message: "Phone number is not valid",
		}),

		dob: z
			.string()
			.or(z.date())
			.refine(
				(val) => {
					const date = new Date(val);
					return !isNaN(date.getTime());
				},
				{
					message: "Date of birth must be a valid date",
				}
			),
		gender: z.enum(["male", "female", "other"], {
			message: "Gender must be 'male', 'female', or 'other'",
		}),
		address: z.string().min(1, "Address is required"),
		bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
			message:
				"Blood type must be a valid type (A+, A-, B+, B-, AB+, AB-, O+, O-)",
		}),
		bank: z.string().min(1, "Bank is required"),
		weight: z.number().positive("Weight must be a positive number"),
	})
	.strict();

const createDonorSchema = z
	.object({
		name: z.string().min(1, "Name is required"),
		phone: z.string().regex(PHONE_NUMBER_REGEX, {
			message: "Phone number is not valid",
		}),
		dob: z
			.string()
			.or(z.date())
			.refine(
				(val) => {
					const date = new Date(val);
					return !isNaN(date.getTime());
				},
				{
					message: "Date of birth must be a valid date",
				}
			),
		gender: z.enum(["male", "female", "other"], {
			message: "Gender must be 'male', 'female', or 'other'",
		}),
		address: z.string().min(1, "Address is required"),
		bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
			message:
				"Blood type must be a valid type (A+, A-, B+, B-, AB+, AB-, O+, O-)",
		}),
		weight: z.number().positive("Weight must be a positive number"),
	})
	.strict();

const updateDonorSchema = z
	.object({
		name: z.string().optional(),
		phone: z
			.string()
			.regex(PHONE_NUMBER_REGEX, {
				message: "Phone number is not valid",
			})
			.optional(),
		dob: z
			.string()
			.or(z.date())
			.refine(
				(val) => {
					const date = new Date(val);
					return !isNaN(date.getTime());
				},
				{
					message: "Date of birth must be a valid date",
				}
			)
			.optional(),
		gender: z
			.enum(["male", "female", "other"], {
				message: "Gender must be 'male', 'female', or 'other'",
			})
			.optional(),
		address: z.string().optional(),
		bloodType: z
			.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
				message:
					"Blood type must be a valid type (A+, A-, B+, B-, AB+, AB-, O+, O-)",
			})
			.optional(),
		weight: z
			.number()
			.positive("Weight must be a positive number")
			.optional(),
	})
	.strict();

module.exports = {
	createDonarSchemaFromMain,
	createDonorSchema,
	updateDonorSchema,
};
