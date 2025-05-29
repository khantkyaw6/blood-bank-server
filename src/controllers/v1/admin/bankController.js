const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const bankService = require("../../../services/v1/admin/bankService");

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
	show: controllerAsyncWrapper(async (req, res) => {
		const data = await bankService.show(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	store: controllerAsyncWrapper(async (req, res) => {
		const data = await bankService.store(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.CREATED
		);
	}),
	update: controllerAsyncWrapper(async (req, res) => {
		const data = await bankService.update(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	delete: controllerAsyncWrapper(async (req, res) => {
		const data = await bankService.delete(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	report: controllerAsyncWrapper(async (req, res) => {
		const data = await bankService.report(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
};

module.exports = bankController;
