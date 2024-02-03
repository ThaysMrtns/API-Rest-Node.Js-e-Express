import http from "http";
import { hostname } from "os";

const port = 3000;

const routes = {
    "/": "Contatos"
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(routes[req.url]);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});