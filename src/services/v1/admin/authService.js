const { serviceAsyncWrapper } = require("../../../helpers/serviceAsyncWrapper");
const signToken = require("../../../helpers/signToken");
const BadRequestError = require("../../../utilities/errors/badRequestError");

const authService = {
	login: serviceAsyncWrapper(async (req) => {
		const { email, password } = req.body;

		const isEqual = password === "password" && email === "admin@gmail.com";
		if (!isEqual) throw new BadRequestError("Incorrect credentials.");

		const token = await signToken({ email, password });

		return {
			message: "Login successfully.",
			data: { token },
		};
	}),
};

module.exports = authService;
