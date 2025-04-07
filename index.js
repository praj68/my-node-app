const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("Hello from CI/CD Node.js App!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
