const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const authService = require("../../../services/v1/bank/authService");

const authController = {
	login: controllerAsyncWrapper(async (req, res) => {
		const data = await authService.login(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.CREATED
		);
	}),
};

module.exports = authController;
