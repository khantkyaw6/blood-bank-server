const http = require("http");

const PORT = 3000;

const httpServer = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello, world!\n");
});

httpServer.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
