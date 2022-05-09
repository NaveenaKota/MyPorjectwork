const { db, ObjectId } = require('./mongo');
const collection = db.db('todo').collection('tasks');

const list = [
	{
		by: 'Naveena',
		date: '10-05-2022',
		done: false,
		title: 'Do ABC',
		for: 'user_1',
	},
	{
		by: 'user_1',
		date: '12-05-2022',
		done: true,
		title: 'Do PQR',
		for: 'Naveena',
	},
	{
		by: 'user_2',
		date: '11-05-2022',
		done: false,
		title: 'Do XYZ',
		for: 'Naveena',
	},
];

async function get(id) {
	const post = await collection.findOne({ _id: new ObjectId(id) });
	if (!post) throw { status: 404, message: 'Post not found' };
	return post;
}

async function remove(id) {
	const post = await collection.findOneAndDelete({ _id: new ObjectId(id) });
	return post.value;
}

async function update(id, task) {
	await collection.findOneAndReplace(
		{ _id: new ObjectId(id) },
		{ ...task, _id: new ObjectId(id) },
		{ returnDocument: 'after' }
	);

	return task;
}

function seed() {
	return collection.insertMany(list);
}

const create = async post => {
	const result = await collection.insertOne({ ...post, _id: undefined });
	post = await get(result.insertedId);
	return post;
};

const getList = async () => {
	const posts = await collection.find({}).toArray();
	return Promise.all(posts.map(x => x));
};

module.exports = {
	create,
	remove,
	update,
	getList,
	seed,
};

module.exports.get = get;
