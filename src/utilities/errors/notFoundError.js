const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./customApiError.js");

class NotFoundError extends CustomApiError {
	constructor(message = "Data not found") {
		super(message, StatusCodes.NOT_FOUND);
		this.details = [{ message }];
		this.statusCodes = StatusCodes.NOT_FOUND;
	}
}

module.exports = NotFoundError;
