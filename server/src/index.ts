import express from 'express';
import { listings } from './listings';
import bodyParser from 'body-parser';
const app = express();
const PORT: number = 9000;

app.use(bodyParser.json());

app.get('/', (_req, res) => {
	res.send('hello world');
});

app.get('/listings', (_req, res) => {
	return res.send(listings);
});

app.post('/delete-listing', (req, res) => {
	const id: string = req.body.id;

	for (let i = 0; i < listings.length; i++) {
		if (listings[i].id === id) {
			return res.send(listings.splice(i, 1)); // delete and return delete item
		}
	}

	return res.send('fails to delete listing');
});

app.listen(PORT, () => {
	console.log(
		'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
		PORT,
		PORT
	);
});
