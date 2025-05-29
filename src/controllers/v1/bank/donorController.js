const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const donorService = require("../../../services/v1/bank/donorService");

const donorController = {
	index: controllerAsyncWrapper(async (req, res) => {
		const data = await donorService.index(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	report: controllerAsyncWrapper(async (req, res) => {
		const data = await donorService.report(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	show: controllerAsyncWrapper(async (req, res) => {
		const data = await donorService.show(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	store: controllerAsyncWrapper(async (req, res) => {
		const data = await donorService.store(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.CREATED
		);
	}),
	update: controllerAsyncWrapper(async (req, res) => {
		const data = await donorService.update(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	delete: controllerAsyncWrapper(async (req, res) => {
		const data = await donorService.delete(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
};

module.exports = donorController;
