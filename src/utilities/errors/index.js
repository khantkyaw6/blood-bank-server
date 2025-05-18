const NotFoundError = require("./notFoundError.js");
const AlreadyExistError = require("./alreadyExistError.js");
const UnAuthorizedError = require("./unAuthorizedError.js");
const BadRequestError = require("./badRequestError.js");
const ForbiddenError = require("./forbiddenError.js");

module.exports = {
  NotFoundError,
  AlreadyExistError,
  UnAuthorizedError,
  BadRequestError,
  ForbiddenError,
};
