const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./customApiError.js");

class AlreadyExistError extends CustomApiError {
	constructor(message = "Data already exist") {
		super(message, StatusCodes.NOT_FOUND);
		this.details = [{ message }];
		this.statusCodes = StatusCodes.NOT_FOUND;
	}
}

module.exports = AlreadyExistError;
