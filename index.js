const app = require("./app");
const connectToDatabase = require("./src/config/db.config");

const PORT = process.env.PORT || 3000;

connectToDatabase()
	.then(() => {
		app.listen(PORT, console.log("Server is running at PORT", PORT));
	})
	.catch((err) => console.log(err));
