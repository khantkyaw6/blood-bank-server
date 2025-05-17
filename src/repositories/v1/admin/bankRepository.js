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
};

module.exports = bankRepository;
