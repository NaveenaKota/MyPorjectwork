const { db, ObjectId } = require('./mongo');
const userModel = require('./user');

const collection = db.db('todo').collection('tasks');

let hieghstId = 3;

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

const includeUser = async post => ({
	...post,
	// user: await userModel.get(post.by),
});

async function get(id) {
	const post = await collection.findOne({ _id: new ObjectId(id) });
	if (!post) {
		throw { status: 404, message: 'Post not found' };
	}
	return includeUser(post);
}

async function remove(id) {
	const post = await collection.findOneAndDelete({ _id: new ObjectId(id) });

	return includeUser(post.value);
}

async function update(id, newPost) {
	newPost = await collection.findOneAndUpdate(
		{ _id: new ObjectId(id) },
		{ $set: newPost },
		{ returnDocument: 'after' }
	);

	return includeUser(newPost);
}

function seed() {
	return collection.insertMany(list);
}

module.exports = {
	async create(post) {
		post.id = ++hieghstId;

		const result = await collection.insertOne(post);
		post = await get(result.insertedId);

		return includeUser(post);
	},
	remove,
	update,
	async getList() {
		const posts = await collection.find({}).toArray();

		return Promise.all(posts.map(x => includeUser(x)));
	},
	seed,
};

module.exports.get = get;
