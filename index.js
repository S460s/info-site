const express = require('express');

express.static(__dirname);

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('routes/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
	res.sendFile('routes/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
	res.sendFile('routes/contact-me.html', { root: __dirname });
});

app.use((req, res) => {
	res.status(404);
	res.sendFile('routes/404.html', { root: __dirname });
});

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});
