const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./customApiError.js");

class BadRequestError extends CustomApiError {
	constructor(message = "Bad Request") {
		super(message, StatusCodes.BAD_REQUEST);
		this.details = [{ message }];
		this.statusCodes = StatusCodes.BAD_REQUEST;
	}
}

module.exports = BadRequestError;
