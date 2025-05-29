const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const donorService = require("../../../services/v1/main/donorService");

const donorController = {
	store: controllerAsyncWrapper(async (req, res) => {
		const data = await donorService.store(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.CREATED
		);
	}),
};

module.exports = donorController;
