const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Request = require("../../../models/BloodRequest");
const paginationBuilder = require("../../../utilities/paginationBuilder");

const requestRepository = {
	findAllRequests: repositoryAsyncWrapper(async (req) => {
		const { limit, page } = req.pagination;

		const requests = await Request.find()
			.sort({ createdAt: -1 })
			.limit(limit)
			.skip(limit * page)
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();

		const totalRequest = await Request.countDocuments();

		const pagination = paginationBuilder({
			limit,
			page,
			count: totalRequest,
			rowLength: requests.length,
		});

		return { rows: requests, pagination };
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
