import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/index';
import { connectDatabase } from './database';
import dotenv from 'dotenv';
dotenv.config();

// const app = express();
// const PORT: number = 9000;

const mount = async (app: Application) => {
	const db = await connectDatabase();

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: () => ({ db })
	});

	app.listen(process.env.PORT, () => {
		console.log(
			'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
			process.env.PORT,
			process.env.PORT
		);
	});

	const listings = await db.listings.find({}).toArray();
	console.log(listings);
};

mount(express());
