const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./customApiError.js");

class UnauthorizedError extends CustomApiError {
	constructor(message = "Unauthorized") {
		super(message, StatusCodes.UNAUTHORIZED);
		this.details = [{ message }];
		this.statusCodes = StatusCodes.UNAUTHORIZED;
	}
}

module.exports = UnauthorizedError;
