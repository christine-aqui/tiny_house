import { MongoClient } from 'mongodb';
import { Database } from '../lib/types';
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.USER;
const userPassword = process.env.USERPASSWORD;
const cluster = process.env.CLUSTER;

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

export const connectDatabase = async (): Promise<Database> => {
	const client = await MongoClient.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	const db = client.db('main');

	return {
		listings: db.collection('test_listings')
	};
};
