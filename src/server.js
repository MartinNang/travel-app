var http = require("http");
const PORT = 8080;

var server = http.createServer((request, response) => {
  response.write("Hello");
  response.end();
});

server.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);
