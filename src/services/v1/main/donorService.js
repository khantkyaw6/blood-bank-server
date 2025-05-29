const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const {
	createDonor,
} = require("../../../repositories/v1/bank/donorRepository");

const donorService = {
	store: serviceAsyncWrapper(async (req) => {
		await createDonor(req.body);

		return {
			message: "Donor Form Submitted successfully.",
		};
	}),
};

module.exports = donorService;
