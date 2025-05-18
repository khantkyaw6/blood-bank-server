const { StatusCodes } = require("http-status-codes");
const { MongooseError } = require("mongoose");
const CustomApiError = require("../utilities/errors/customApiError");

const errorMiddleware = (err, _req, res, next) => {
	let errorMessage = err.message || "Something went wrong!";
	let statusCode = err.statusCode || 500;
	let details = null;
	console.log(err);

	// Handle Mongoose errors
	if (err instanceof MongooseError || err.name === "MongoServerError") {
		switch (err.name) {
			case "ValidationError":
				errorMessage = "Validation Error";
				statusCode = StatusCodes.BAD_REQUEST;
				details = Object.values(err.errors).map((errorItem) => ({
					field: errorItem.path,
					message: errorItem.message,
				}));
				break;
			case "CastError":
				errorMessage = `Invalid value for field: ${err.path}`;
				statusCode = StatusCodes.BAD_REQUEST;
				details = [
					{
						field: err.path,
						message: `Invalid value: ${err.value}`,
					},
				];
				break;
			case "MongoServerError":
				if (err.code === 11000) {
					// Handle duplicate key error
					const duplicatedKeys = Object.keys(err.keyValue);
					const duplicatedCollection =
						err.message
							.split("collection: ")[1]
							?.split(" ")[0]
							?.split(".")[1][0]
							.toUpperCase() +
						err.message
							.split("collection: ")[1]
							?.split(" ")[0]
							?.split(".")[1]
							?.slice(1);
					errorMessage = `${duplicatedCollection} with current ${duplicatedKeys.join(
						", "
					)} already exists.`;
					statusCode = StatusCodes.CONFLICT;
					details = [
						{
							field: duplicatedKeys.join(", "),
							message: "Duplicate data detected.",
						},
					];
				}
				break;
			default:
				errorMessage = "Database Error";
				statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
				details = [
					{
						message:
							"An error occurred while processing your request.",
					},
				];
		}
	}
	// Handle custom application errors
	else if (err instanceof CustomApiError) {
		statusCode = err.statusCodes;
		details = err.details;
		switch (err.constructor.name) {
			case "BadRequestError":
				errorMessage = "Bad Request";
				break;
			case "UnauthorizedError":
				errorMessage = "Unauthorized";
				break;
			case "AlreadyExistError":
				errorMessage = "Already Exist";
				break;
			case "NotFoundError":
				errorMessage = "Not Found";
				break;
			default:
				errorMessage = "Custom Error";
		}
	}
	// Handle AWS errors
	else if (err.$metadata && err.Code) {
		errorMessage = "Internal Server Error";
		statusCode = 500;
		details = [
			{
				code: err.Code,
				statusCode: err.$metadata.httpStatusCode,
				message: err.message, // only using message for now
				requestId: err.$metadata.requestId,
				hostId: err.HostId,
			},
		];
	}

	console.log({ errorMessage });

	// Send the error response
	res.status(statusCode).json({
		isSuccess: false,
		statusCode,
		error: errorMessage,
		details:
			details && details.length > 0
				? details.map((detail) => detail.message)
				: null,
	});
};

module.exports = errorMiddleware;
