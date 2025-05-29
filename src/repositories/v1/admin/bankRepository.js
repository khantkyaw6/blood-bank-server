const { hashPassword } = require("../../../helpers/passwordHelper");
const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Bank = require("../../../models/Bank");
const paginationBuilder = require("../../../utilities/paginationBuilder");

const bankRepository = {
	findAllBanks: repositoryAsyncWrapper(async (req) => {
		const { limit, page } = req.pagination;

		const banks = await Bank.find()
			.sort({ createdAt: -1 })
			.limit(limit)
			.skip(limit * page)
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();

		const totalBanks = await Bank.countDocuments();

		const pagination = paginationBuilder({
			limit,
			page,
			count: totalBanks,
			rowLength: banks.length,
		});

		return { rows: banks, pagination };
	}),

	findAllBanksWithoutPagination: repositoryAsyncWrapper(async (req) => {
		const banks = await Bank.find()
			.sort({ createdAt: -1 })
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();

		return banks;
	}),
	findBankById: repositoryAsyncWrapper(async (id) => {
		const bank = await Bank.findById(id).lean();
		return bank;
	}),
	createBank: repositoryAsyncWrapper(async (data) => {
		await Bank.create({
			...data,
			password: await hashPassword(data.password),
		});
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
