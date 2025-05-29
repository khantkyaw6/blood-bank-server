const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const {
	createRequest,
} = require("../../../repositories/v1/bank/requestRepository");
const requestService = {
	store: serviceAsyncWrapper(async (req) => {
		await createRequest(req.body);

		return {
			message: "Request Submitted successfully.",
		};
	}),
};

module.exports = requestService;
