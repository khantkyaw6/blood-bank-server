const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Donor = require("../../../models/Donor");

const donorRepository = {
	findAllDonors: repositoryAsyncWrapper(async (req) => {
		const donor = await Donor.find()
			.sort({ createdAt: -1 })
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();
		return donor;
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
