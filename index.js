const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
	res.sendFile('routes/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
	res.sendFile('routes/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
	res.sendFile('routes/contact-me.html', { root: __dirname });
});

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});
