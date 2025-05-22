const {
	repositoryAsyncWrapper,
} = require("../../../helpers/repositoryAsyncWrapper");
const Appointment = require("../../../models/Appointment");
const paginationBuilder = require("../../../utilities/paginationBuilder");

const appointmentRepository = {
	findAllAppointments: repositoryAsyncWrapper(async (req) => {
		const { limit, page } = req.pagination;

		const appointments = await Appointment.find()
			.sort({ createdAt: -1 })
			.limit(limit)
			.skip(limit * page)
			.populate([
				{ path: "bloodRequest", select: "name phone bloodType" },
				{ path: "donor", select: "name gender phone bloodType" },
				{ path: "bank", select: "title description" },
			])
			.select({ updatedAt: 0, __v: 0, password: 0 })
			.lean();

		const totalAppointments = await Appointment.countDocuments();

		const pagination = paginationBuilder({
			limit,
			page,
			count: totalAppointments,
			rowLength: appointments.length,
		});

		return { rows: appointments, pagination };
	}),
	findAppointmentById: repositoryAsyncWrapper(async (id) => {
		const appointment = await Appointment.findById(id)
			.populate([
				{ path: "bloodRequest", select: "-createdAt -updatedAt" },
				{ path: "donor", select: "-createdAt -updatedAt" },
				{ path: "bank", select: "-createdAt -updatedAt" },
			])
			.lean();
		return appointment;
	}),
	createAppointment: repositoryAsyncWrapper(async (data) => {
		await Appointment.create({ ...data });
	}),
	updateAppointment: repositoryAsyncWrapper(async ({ id, data }) => {
		const updateRequest = await Appointment.findByIdAndUpdate(
			id,
			{ ...data },
			{ new: true }
		);

		return updateRequest;
	}),
	deleteAppointment: repositoryAsyncWrapper(async (id) => {}),
};

module.exports = appointmentRepository;
