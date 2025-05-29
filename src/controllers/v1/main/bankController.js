const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const bankService = require("../../../services/v1/main/bankService");

const bankController = {
	index: controllerAsyncWrapper(async (req, res) => {
		const data = await bankService.index(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
};

module.exports = bankController;
