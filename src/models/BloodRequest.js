const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bloodRequestSchema = new Schema(
	{
		bank: {
			type: Schema.Types.ObjectId,
			ref: "bank",
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
			min: 0,
		},
		bloodType: {
			type: String,
			enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
			required: true,
		},
		unit: {
			type: Number,
			required: true,
			min: 1,
		},
		status: {
			type: String,
			enum: ["pending", "approved", "rejected", "fulfilled"],
			default: "pending",
		},
		deleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const BloodRequest = model("bloodrequest", bloodRequestSchema);
module.exports = BloodRequest;
