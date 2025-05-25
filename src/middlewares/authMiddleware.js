const jwt = require("jsonwebtoken");
const { BadRequestError, UnAuthorizedError } = require("../utilities/errors");

const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer "))
		throw new BadRequestError("Authorization header missing or invalid");

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
		req.admin = decoded;
		next();
	} catch (error) {
		throw new UnAuthorizedError("Token is not valid");
	}
};

module.exports = authMiddleware;
