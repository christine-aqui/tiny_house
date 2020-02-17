import express from 'express';
const app = express();
const PORT: number = 9000;

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(PORT, () => {
	console.log(
		'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
		PORT,
		PORT
	);
});
