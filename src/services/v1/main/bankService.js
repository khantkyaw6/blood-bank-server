const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const Bank = require("../../../models/Bank");
const {
	findAllBanksWithoutPagination,
} = require("../../../repositories/v1/admin/bankRepository");

const bankService = {
	index: serviceAsyncWrapper(async (req) => {
		const banks = await findAllBanksWithoutPagination(req);

		return {
			message: "Retrived Bank List Successfully.",
			data: {
				banks,
			},
		};
	}),
};

module.exports = bankService;
