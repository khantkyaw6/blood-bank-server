const express = require("express");
const cors = require("cors");
// const errorMiddleware = require("./src/middlewares/errorMiddleware");
const app = express();
const router = require("./src/routes");
const errorMiddleware = require("./src/middlewares/errorMiddleware");

require("dotenv").config();

const corsOptions = {
	origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.get("/", (_req, res) => {
	res.json({
		success: true,
		errCode: 200,
		message: "Welcome from blood bank server",
	});
});

app.use(errorMiddleware);

module.exports = app;
