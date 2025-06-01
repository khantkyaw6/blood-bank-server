const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const Bank = require("../../../models/Bank");
const {
	findAllBanks,
	findBankById,
	createBank,
	updateBank,
	findAllBanksWithoutPagination,
	deleteBank,
} = require("../../../repositories/v1/admin/bankRepository");
const NotFoundError = require("../../../utilities/errors/notFoundError");

const bankService = {
	index: serviceAsyncWrapper(async (req) => {
		const { rows: banks, pagination } = await findAllBanks(req);
		console.log({ jwt: req.admin });

		return {
			message: "Retrived Bank List Successfully.",
			data: {
				banks,
				pagination,
			},
		};
	}),
	show: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;
		const bank = await findBankById(id);

		console.log({ bank });

		if (!bank) throw new NotFoundError("Bank Not Found");

		return {
			message: "Retrived Bank Detail Successfully.",
			data: { bank },
		};
	}),
	store: serviceAsyncWrapper(async (req) => {
		await createBank(req.body);

		return {
			message: "Bank created successfully.",
		};
	}),
	update: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;

		const updatedBank = await updateBank({ id, data: req.body });

		if (!updatedBank) throw new NotFoundError("Bank Not Found");

		return {
			message: "Bank updated successfully.",
		};
	}),
	delete: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;

		await deleteBank(id);

		return {
			message: "bank deleted",
		};
	}),

	report: serviceAsyncWrapper(async (req) => {
		const banks = await findAllBanksWithoutPagination(req);
		console.log({ jwt: req.admin });

		return {
			message: "Retrived Bank List Successfully.",
			data: {
				banks,
			},
		};
	}),
};

module.exports = bankService;
