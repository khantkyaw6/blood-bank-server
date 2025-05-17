const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bankSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: "",
		},
		address: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		status: {
			type: String,
			enum: ["active", "suspend"],
			default: "active",
		},
	},
	{
		timestamps: true,
	}
);

const Bank = model("bank", bankSchema);

module.exports = Bank;
