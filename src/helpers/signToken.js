const jwt = require("jsonwebtoken");
const {
	jwt_token_secret,
	jwt_token_expiresIn,
} = require("../config/auth.config");

const signToken = async (admin) => {
	return jwt.sign(
		{
			admin: {
				_id: admin._id,
				role: admin.role,
			},
		},
		jwt_token_secret || "thisiscondomanagementsystem",
		{ expiresIn: jwt_token_expiresIn + "d" }
	);
};

module.exports = signToken;
