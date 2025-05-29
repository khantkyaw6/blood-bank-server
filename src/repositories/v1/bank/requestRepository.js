const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Request = require("../../../models/BloodRequest");
const paginationBuilder = require("../../../utilities/paginationBuilder");

const requestRepository = {
	findAllRequests: repositoryAsyncWrapper(async (req) => {
		const { limit, page } = req.pagination;

		const requests = await Request.find({
			bank: req.admin._id,
			deleted: false,
		})
			.sort({ createdAt: -1 })
			.limit(limit)
			.skip(limit * page)
			.populate([{ path: "bank", select: "title email" }])
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();

		const totalRequest = await Request.countDocuments({
			bank: req.admin._id,
		});

		const pagination = paginationBuilder({
			limit,
			page,
			count: totalRequest,
			rowLength: requests.length,
		});

		return { rows: requests, pagination };
	}),
	findAllRequestsWithoutPagination: repositoryAsyncWrapper(async (req) => {
		const requests = await Request.find({ deleted: false })
			.sort({ createdAt: -1 })
			.select({ updatedAt: 0, __v: 0 })
			.lean();

		return requests;
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
	deleteRequest: repositoryAsyncWrapper(async (id) => {
		await Request.findByIdAndUpdate(id, { deleted: true });
	}),
};

module.exports = requestRepository;
