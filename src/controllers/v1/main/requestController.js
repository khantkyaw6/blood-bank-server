const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const requestService = require("../../../services/v1/main/requestService");

const requestController = {
	store: controllerAsyncWrapper(async (req, res) => {
		const data = await requestService.store(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.CREATED
		);
	}),
};

module.exports = requestController;
