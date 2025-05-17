const { StatusCodes } = require("http-status-codes");

const responseMessage = (
	res,
	message = "",
	result = null,
	status = StatusCodes.OK
) => {
	const isSuccess = status >= 200 && status < 300;

	const response = {
		isSuccess,
		statusCode: status,
		message,
	};

	if (isSuccess && result) {
		response.data = result;
	}

	res.status(status).json(response);
};

module.exports = responseMessage;
