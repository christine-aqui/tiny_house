require('dotenv').config();
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/index';
import { connectDatabase } from './database';

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
};

mount(express());
