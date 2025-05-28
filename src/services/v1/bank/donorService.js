const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const {
	findAllDonors,
	findDonorById,
	createDonor,
	updateDonor,
	deleteDonor,
} = require("../../../repositories/v1/bank/donorRepository");

const NotFoundError = require("../../../utilities/errors/notFoundError");

const donorService = {
	index: serviceAsyncWrapper(async (req) => {
		const { rows: donors, pagination } = await findAllDonors(req);

		console.log({ jwt: req.admin, bankId: req.admin._id });

		return {
			message: "Retrived Donor List Successfully.",
			data: {
				donors,
				pagination,
			},
		};
	}),
	show: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;
		const donor = await findDonorById(id);

		console.log({ donor });

		if (!donor) throw new NotFoundError("Donor Not Found");

		return {
			message: "Retrived Donor Detail Successfully.",
			data: { donor },
		};
	}),
	store: serviceAsyncWrapper(async (req) => {
		await createDonor({ ...req.body, bank: req.admin._id });

		return {
			message: "Donor created successfully.",
		};
	}),
	update: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;

		const updatedDonor = await updateDonor({
			id,
			data: { ...req.body, bank: req.admin._id },
		});

		if (!updatedDonor) throw new NotFoundError("Donor Not Found");

		return {
			message: "Donor updated successfully.",
		};
	}),
	delete: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;

		return {
			message: "donor deleted",
		};
	}),
};

module.exports = donorService;
