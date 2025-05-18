const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./customApiError.js");

class BadRequestError extends CustomApiError {
  constructor(message = "Forbidden") {
    super(message, StatusCodes.FORBIDDEN);
    this.details = [{ message }];
    this.statusCodes = StatusCodes.FORBIDDEN;
  }
}

module.exports = BadRequestError;
