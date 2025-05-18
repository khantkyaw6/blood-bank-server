const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const Bank = require("../../../models/Bank");
const {
	findAllBanks,
	findBankById,
} = require("../../../repositories/v1/admin/bankRepository");
const NotFoundError = require("../../../utilities/errors/notFoundError");

const bankService = {
	index: serviceAsyncWrapper(async (req) => {
		const banks = await findAllBanks(req);

		return {
			message: "bank list",
			data: {
				banks,
			},
		};
	}),
	show: serviceAsyncWrapper(async (req) => {
		const { id } = req.params;
		const bank = await findBankById(id);

		console.log({ bank });

		if (!bank) throw new NotFoundError("Bank Not Found");

		return {
			message: "bank detail",
			data: { bank },
		};
	}),
	store: serviceAsyncWrapper(async (req) => {
		Bank.insertMany([
			{
				email: "centralblood1@example.com",
				password: "hashedPassword1",
				title: "Central Blood Bank",
				description: "Main center for city-wide donations.",
				address: "123 Main St",
				city: "Bangkok",
				phone: "0891234567",
				status: "active",
			},
			{
				email: "lifesaver2@example.com",
				password: "hashedPassword2",
				title: "Lifesaver Blood Center",
				description: "Emergency and walk-in services available.",
				address: "45 River Rd",
				city: "Chiang Mai",
				phone: "0812345678",
				status: "active",
			},
			{
				email: "hopeblood3@example.com",
				password: "hashedPassword3",
				title: "Hope Blood Bank",
				description: "24/7 service for emergencies.",
				address: "88 Hope St",
				city: "Phuket",
				phone: "0871112233",
				status: "suspend",
			},
			{
				email: "mercyblood4@example.com",
				password: "hashedPassword4",
				title: "Mercy Blood Center",
				description: "Partnered with local hospitals.",
				address: "321 Elm Ave",
				city: "Nakhon Ratchasima",
				phone: "0845566778",
				status: "active",
			},
			{
				email: "cityblood5@example.com",
				password: "hashedPassword5",
				title: "City Blood Bank",
				description: "",
				address: "77 City Walk",
				city: "Udon Thani",
				phone: "0869988776",
				status: "active",
			},
			{
				email: "unityblood6@example.com",
				password: "hashedPassword6",
				title: "Unity Blood Center",
				description: "Volunteer-run donation center.",
				address: "99 Volunteer Rd",
				city: "Hat Yai",
				phone: "0882345671",
				status: "active",
			},
			{
				email: "heartblood7@example.com",
				password: "hashedPassword7",
				title: "Heart Blood Bank",
				description: "",
				address: "456 Heart St",
				city: "Surat Thani",
				phone: "0833456123",
				status: "active",
			},
			{
				email: "sunriseblood8@example.com",
				password: "hashedPassword8",
				title: "Sunrise Blood Center",
				description: "We care, we serve.",
				address: "101 Sunrise Blvd",
				city: "Pattaya",
				phone: "0827654321",
				status: "suspend",
			},
			{
				email: "futureblood9@example.com",
				password: "hashedPassword9",
				title: "Future Blood Bank",
				description: "Technologically advanced facility.",
				address: "56 Innovation Park",
				city: "Khon Kaen",
				phone: "0851122334",
				status: "active",
			},
			{
				email: "lifechain10@example.com",
				password: "hashedPassword10",
				title: "Life Chain Blood Bank",
				description: "",
				address: "76 Link Ave",
				city: "Rayong",
				phone: "0893344556",
				status: "active",
			},
			{
				email: "redcross11@example.com",
				password: "hashedPassword11",
				title: "Red Cross Center",
				description: "Red Cross blood donation center.",
				address: "10 Red Cross Rd",
				city: "Bangkok",
				phone: "0801123581",
				status: "active",
			},
			{
				email: "bloodforce12@example.com",
				password: "hashedPassword12",
				title: "BloodForce Center",
				description: "",
				address: "54 Plasma St",
				city: "Chiang Rai",
				phone: "0819988776",
				status: "suspend",
			},
			{
				email: "healersblood13@example.com",
				password: "hashedPassword13",
				title: "Healers Blood Bank",
				description: "Support for rural hospitals.",
				address: "12 Rural Rd",
				city: "Lampang",
				phone: "0876543212",
				status: "active",
			},
			{
				email: "vitalblood14@example.com",
				password: "hashedPassword14",
				title: "Vital Blood Bank",
				description: "",
				address: "29 Vital Ave",
				city: "Nakhon Pathom",
				phone: "0823332221",
				status: "active",
			},
			{
				email: "guardianblood15@example.com",
				password: "hashedPassword15",
				title: "Guardian Blood Bank",
				description: "Donor safety is our priority.",
				address: "90 Safe Street",
				city: "Trang",
				phone: "0845544332",
				status: "active",
			},
		]);

		console.log("data inserted");
		return {
			message: "bank created",
		};
	}),
	update: serviceAsyncWrapper(async (req) => {
		return {
			message: "bank updated",
			data: {},
		};
	}),
	delete: serviceAsyncWrapper(async (req) => {
		return {
			message: "bank deleted",
		};
	}),
};

module.exports = bankService;
