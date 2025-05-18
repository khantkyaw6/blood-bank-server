const { ZodError } = require("zod");
const { StatusCodes } = require("http-status-codes");

function validateData(schema) {
	return (req, res, next) => {
		console.log("in validate data", req.user, req.params);
		try {
			console.log("in validate data", req.body);
			const validatedData = schema.parse(req.body);
			// Replace the request body with the validated and transformed data
			req.body = validatedData;
			next();
		} catch (error) {
			console.log("Zod Error:", error);
			if (error instanceof ZodError) {
				const errorMessages = error.errors.map((issue) => {
					// When the issue.message is "Required", we can replace it with a more user-friendly message
					if (issue.message === "Required") {
						return issue.path[0] + "generic_required";
					} else {
						return issue.message;
					}
				});

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
}

module.exports = validateData;
