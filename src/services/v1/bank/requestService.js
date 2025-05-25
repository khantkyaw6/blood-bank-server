const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const {
	findAllRequests,
	findRequestById,
	createRequest,
	updateRequest,
	deleteRequest,
} = require("../../../repositories/v1/bank/requestRepository");

const NotFoundError = require("../../../utilities/errors/notFoundError");

const requestService = {
	index: serviceAsyncWrapper(async (req) => {
		const { rows: requests, pagination } = await findAllRequests(req);

		return {
			message: "Retrived Request List Successfully.",
			data: {
				requests,
				pagination,
			},
		};
	}),
	show: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;
		const request = await findRequestById(id);

		console.log({ request });

		if (!request) throw new NotFoundError("Reqeust Not Found");

		return {
			message: "Retrived Request Detail Successfully.",
			data: { request },
		};
	}),
	store: serviceAsyncWrapper(async (req) => {
		await createRequest({ ...req.body, bank: req.admin._id });

		return {
			message: "Request created successfully.",
		};
	}),
	update: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;

		const updatedDonor = await updateRequest({
			id,
			data: { ...req.body, bank: req.admin._id },
		});

		if (!updatedDonor) throw new NotFoundError("Request Not Found");

		return {
			message: "Request updated successfully.",
		};
	}),
	delete: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;

		return {
			message: "Request deleted",
		};
	}),
};

module.exports = requestService;
