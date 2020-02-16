const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


const id = new ObjectID();
console.log(id);
MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
	if (error) {
		console.log('unable to connect');
		return;
	}

	const db = client.db(databaseName);


	db.collection('users').findOne({
		name: 'Tanpreet'
	}, (error, result) => {
		if (error) {
			return;
		} else {
			console.log(result);
		}
	});
	// db.collection('users').insertOne({
	// 	name: 'Tanpreet',
	// 	age: 24
	// }, (error, result) => {
	// 	if (error) {
	// 		console.log('unable to save');
	// 		return;
	// 	}
	// 	console.log(result);
	// })

	// db.collection('tasks').insertMany([
	// 	{
	// 		description: 'eating',
	// 		completed: true
	// 	},
	// 	{
	// 		description: 'sleeping',
	// 		completed: false
	// 	},
	// ], (error, result) => {
	// 	if (error) {
	// 		return;
	// 	}
	// 	console.log(result.ops);
	// })
})