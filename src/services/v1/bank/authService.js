const { comparePassword } = require("../../../helpers/passwordHelper");
const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const signToken = require("../../../helpers/signToken");
const Bank = require("../../../models/Bank");

const authService = {
	login: serviceAsyncWrapper(async (req) => {
		const { email, password } = req.body;
		const checkBank = await Bank.findOne({ email }).lean();

		if (!checkBank) throw new BadRequestError(req.t("Bank Not Found"));

		const isEqual = await comparePassword(password, checkBank.password);

		if (!isEqual) throw new BadRequestError(req.t("incorrect_password"));

		const token = await signToken(checkBank);

		delete checkBank.password;

		return {
			message: "Login successfully.",
			data: { bank: checkBank, token },
		};
	}),
};

module.exports = authService;
