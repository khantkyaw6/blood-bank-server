const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const donarSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		dob: {
			type: Date,
			required: true,
		},
		gender: {
			type: String,
			enum: ["male", "female", "other"],
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		bloodType: {
			type: String,
			enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
			required: true,
		},
		weight: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Donar = model("donar", donarSchema);
module.exports = Donar;
