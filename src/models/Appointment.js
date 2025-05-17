const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const appointmentSchema = new Schema(
	{
		donar: {
			type: Schema.Types.ObjectId,
			ref: "donar",
			required: true,
		},
		bloodRequest: {
			type: Schema.Types.ObjectId,
			ref: "bloodrequest",
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		bank: {
			type: Schema.Types.ObjectId,
			ref: "bank",
			required: true,
		},
		status: {
			type: String,
			enum: ["scheduled", "completed", "cancelled"],
			default: "scheduled",
		},
	},
	{
		timestamps: true,
	}
);

const Appointment = model("appointment", appointmentSchema);
module.exports = Appointment;
