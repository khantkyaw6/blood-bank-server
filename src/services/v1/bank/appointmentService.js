const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const {
	createAppointment,
	updateAppointment,
	findAllAppointments,
	findAppointmentById,
	deleteAppointment,
	findAllAppointmentsWithoutPagination,
} = require("../../../repositories/v1/bank/appointmentRepository");
const NotFoundError = require("../../../utilities/errors/notFoundError");

const appointmentService = {
	report: serviceAsyncWrapper(async (req) => {
		const appointments = await findAllAppointmentsWithoutPagination(req);

		return {
			message: "Retrived Appointment List Successfully.",
			data: {
				appointments,
			},
		};
	}),
	index: serviceAsyncWrapper(async (req) => {
		const { rows: appointments, pagination } = await findAllAppointments(
			req
		);

		return {
			message: "Retrived Appointment List Successfully.",
			data: {
				appointments,
				pagination,
			},
		};
	}),
	show: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;
		const request = await findAppointmentById(id);

		console.log({ request });

		if (!request) throw new NotFoundError("Appointment Not Found");

		return {
			message: "Retrived Appointment Detail Successfully.",
			data: { request },
		};
	}),
	store: serviceAsyncWrapper(async (req) => {
		await createAppointment({ ...req.body, bank: req.admin._id });

		return {
			message: "Appointment created successfully.",
		};
	}),
	update: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;

		const updatedDonor = await updateAppointment({
			id,
			data: { ...req.body, bank: req.admin._id },
		});

		if (!updatedDonor) throw new NotFoundError("Appointment Not Found");

		return {
			message: "Appointment updated successfully.",
		};
	}),
	delete: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;
		await deleteAppointment(id);
		return {
			message: "Appointment deleted",
		};
	}),
};

module.exports = appointmentService;
