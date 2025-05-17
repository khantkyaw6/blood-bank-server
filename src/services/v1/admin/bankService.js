const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");

const bankService = {
	index: serviceAsyncWrapper(async (req) => {
		return {
			message: "bank list",
			data: {},
		};
	}),
	show: serviceAsyncWrapper(async (req) => {
		return {
			message: "bank detail",
			data: {},
		};
	}),
	store: serviceAsyncWrapper(async (req) => {
		return {
			message: "bank created",
		};
	}),
	update: serviceAsyncWrapper(async (req) => {
		return {
			message: "bank updated",
			data: {},
		};
	}),
	delete: serviceAsyncWrapper(async (req) => {
		return {
			message: "bank deleted",
		};
	}),
};

module.exports = bankService;
