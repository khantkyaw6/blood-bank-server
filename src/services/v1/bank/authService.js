const { comparePassword } = require("../../../helpers/passwordHelper");
const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const signToken = require("../../../helpers/signToken");
const Bank = require("../../../models/Bank");
const BadRequestError = require("../../../utilities/errors/badRequestError");

const authService = {
	login: serviceAsyncWrapper(async (req) => {
		const { email, password } = req.body;
		const checkBank = await Bank.findOne({ email, deleted: false }).lean();

		if (!checkBank) throw new BadRequestError("Bank Not Found");

		console.log({ checkBank });

		const isEqual = await comparePassword(password, checkBank.password);

		if (!isEqual) throw new BadRequestError("Incorrect Password");

		const token = await signToken(checkBank);

		delete checkBank.password;

		return {
			message: "Login successfully.",
			data: { bank: checkBank, token },
		};
	}),
};

module.exports = authService;
