const { JWT_TOKEN_SECRET, JWT_TOKEN_EXPIRE_TIME, JWT_TOKEN_USER_EXPIRE_TIME } =
	process.env;

module.exports = {
	jwt_token_secret: JWT_TOKEN_SECRET,
	jwt_token_expiresIn: JWT_TOKEN_EXPIRE_TIME * 1,
	jwt_token_user_expiresIn: JWT_TOKEN_USER_EXPIRE_TIME * 1,
};
