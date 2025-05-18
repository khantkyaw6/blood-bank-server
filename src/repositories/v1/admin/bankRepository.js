const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Bank = require("../../../models/Bank");

const bankRepository = {
	findAllBanks: repositoryAsyncWrapper(async (req) => {
		const bank = await Bank.find()
			.sort({ createdAt: -1 })
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();
		return bank;
	}),
	findBankById: repositoryAsyncWrapper(async (id) => {
		const bank = await Bank.findById(id).lean();
		return bank;
	}),
	createBank: repositoryAsyncWrapper(async (data) => {
		await Bank.create({ ...data });
	}),
	updateBank: repositoryAsyncWrapper(async ({ id, data }) => {
		const updateBank = await Bank.findByIdAndUpdate(
			id,
			{ ...data },
			{ new: true }
		);

		return updateBank;
	}),
	deleteBank: repositoryAsyncWrapper(async (id) => {}),
};

module.exports = bankRepository;
