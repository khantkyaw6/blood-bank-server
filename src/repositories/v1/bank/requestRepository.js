const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Request = require("../../../models/BloodRequest");

const requestRepository = {
	findAllRequests: repositoryAsyncWrapper(async (req) => {
		const request = await Request.find()
			.sort({ createdAt: -1 })
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();
		return request;
	}),
	findRequestById: repositoryAsyncWrapper(async (id) => {
		const request = await Request.findById(id).lean();
		return request;
	}),
	createRequest: repositoryAsyncWrapper(async (data) => {
		await Request.create({ ...data });
	}),
	updateRequest: repositoryAsyncWrapper(async ({ id, data }) => {
		const updateRequest = await Request.findByIdAndUpdate(
			id,
			{ ...data },
			{ new: true }
		);

		return updateRequest;
	}),
	deleteRequest: repositoryAsyncWrapper(async (id) => {}),
};

module.exports = requestRepository;
