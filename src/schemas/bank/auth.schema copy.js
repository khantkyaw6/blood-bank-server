const { z } = require("zod");

const loginSchema = z
	.object({
		email: z.string().email("email_must_valid"),
		password: z.string().min(6, "password_min_length"),
	})
	.strict();

module.exports = { loginSchema };
