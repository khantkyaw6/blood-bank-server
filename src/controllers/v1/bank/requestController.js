const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const requestService = require("../../../services/v1/bank/requestService");

const requestController = {
	index: controllerAsyncWrapper(async (req, res) => {
		const data = await requestService.index(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	show: controllerAsyncWrapper(async (req, res) => {
		const data = await requestService.show(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	store: controllerAsyncWrapper(async (req, res) => {
		const data = await requestService.store(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.CREATED
		);
	}),
	update: controllerAsyncWrapper(async (req, res) => {
		const data = await requestService.update(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	delete: controllerAsyncWrapper(async (req, res) => {
		const data = await requestService.delete(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
};

module.exports = requestController;
