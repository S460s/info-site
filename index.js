const http = require('http');
const fs = require('fs').promises;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');

	let path = './pages/';
	switch (req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;
		case '/contact-me':
			path += 'contact-me.html';
			res.statusCode = 200;
			break;
		default:
			path += '404.html';
			res.statusCode = 404;
			break;
	}

	fs.readFile(path)
		.then((data) => {
			res.write(data);
		})
		.catch((err) => console.log(err))
		.finally(() => res.end());
});

server.listen(8080, 'localhost', () => {
	console.log('Server is on.');
});
