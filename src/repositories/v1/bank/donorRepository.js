const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Donor = require("../../../models/Donor");
const paginationBuilder = require("../../../utilities/paginationBuilder");

const donorRepository = {
	findAllDonors: repositoryAsyncWrapper(async (req) => {
		const { limit, page } = req.pagination;

		const donors = await Donor.find()
			.sort({ createdAt: -1 })
			.limit(limit)
			.skip(limit * page)
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();

		const totalDonor = await Donor.countDocuments();

		const pagination = paginationBuilder({
			limit,
			page,
			count: totalDonor,
			rowLength: donors.length,
		});

		return { rows: donors, pagination };
	}),
	findDonorById: repositoryAsyncWrapper(async (id) => {
		const donor = await Donor.findById(id).lean();
		return donor;
	}),
	createDonor: repositoryAsyncWrapper(async (data) => {
		await Donor.create({ ...data });
	}),
	updateDonor: repositoryAsyncWrapper(async ({ id, data }) => {
		const updateDonor = await Donor.findByIdAndUpdate(
			id,
			{ ...data },
			{ new: true }
		);

		return updateDonor;
	}),
	deleteDonor: repositoryAsyncWrapper(async (id) => {}),
};

module.exports = donorRepository;
