const router = require("express").Router();
const authController = require("../../../controllers/v1/admin/authController");
const validateData = require("../../../middlewares/validationMiddleware");
const { loginSchema } = require("../../../schemas/admin/auth.schema");

router.route("/login").post(validateData(loginSchema), authController.login);

module.exports = router;
