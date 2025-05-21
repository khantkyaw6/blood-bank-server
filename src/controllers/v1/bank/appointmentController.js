const { StatusCodes } = require("http-status-codes");
const controllerAsyncWrapper = require("../../../helpers/controllerAsyncWrapper");
const responseMessage = require("../../../helpers/responseMessageHandler");
const appointmentService = require("../../../services/v1/bank/appointmentService");

const appointmentController = {
	index: controllerAsyncWrapper(async (req, res) => {
		const data = await appointmentService.index(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	show: controllerAsyncWrapper(async (req, res) => {
		const data = await appointmentService.show(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	store: controllerAsyncWrapper(async (req, res) => {
		const data = await appointmentService.store(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.CREATED
		);
	}),
	update: controllerAsyncWrapper(async (req, res) => {
		const data = await appointmentService.update(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
	delete: controllerAsyncWrapper(async (req, res) => {
		const data = await appointmentService.delete(req);
		responseMessage(
			res,
			data.message,
			data.data,
			data.status || StatusCodes.OK
		);
	}),
};

module.exports = appointmentController;
