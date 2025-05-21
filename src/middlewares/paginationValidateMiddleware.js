const { z, ZodError } = require("zod");
const { StatusCodes } = require("http-status-codes");

const paginationSchema = z.object({
	limit: z
		.string()
		.transform(Number)
		.refine((n) => n > 0, {
			message: "Limit must be a positive number",
		})
		.default("20"), // Default as string for `.transform(Number)`,
	page: z
		.string()
		.transform(Number)
		.refine((n) => n > 0, {
			message: "Page must be a positive number",
		})
		.default("1"),
});

const paginationValidateMiddleware = (req, res, next) => {
	const { limit, page } = req.query;

	try {
		const validatedData = paginationSchema.parse({ limit, page });
		req.pagination = {
			limit: validatedData.limit,
			page: validatedData.page - 1,
		};
		next();
	} catch (error) {
		if (error instanceof ZodError) {
			const errorMessages = error.errors.map((issue) => issue.message);
			res.status(StatusCodes.BAD_REQUEST).json({
				isSuccess: false,
				statusCode: StatusCodes.BAD_REQUEST,
				error: "Invalid data",
				details: errorMessages,
			});
		} else {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				isSuccess: false,
				statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
				error: "Internal Server Error",
				details: null,
			});
		}
	}
};

module.exports = paginationValidateMiddleware;
