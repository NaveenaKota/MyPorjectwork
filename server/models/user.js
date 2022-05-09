const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, ObjectId } = require('./mongo');

const collection = db.db('todo').collection('users');

const SALT_ROUNDS = +process.env.SALT_ROUNDS;

const list = [
	{
		username: 'Naveena',
		password: 'Naveena',
		avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
	{
		username: 'user_1',
		password: 'pass',
		avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
	},
	{
		username: 'user_2',
		password: 'pass',
		avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
	},
];

const get = async username => {
	const user = await collection.findOne({ username });
	if (!user) {
		throw { statusCode: 404, message: 'User not found' };
	}
	return { ...user, password: undefined };
};

async function remove(username) {
	const user = await collection.findOneAndDelete({ username });

	return { ...user.value, password: undefined };
}

async function update(id, newUser) {
	if (newUser.password) {
		newUser.password = await bcrypt.hash(newUser.password, SALT_ROUNDS);
	}

	newUser = await collection.findOneAndUpdate(
		{ _id: new ObjectId(id) },
		{ $set: newUser },
		{ returnDocument: 'after' }
	);

	return { ...newUser, password: undefined };
}

async function login(username, password) {
	const user = await collection.findOne({ username });

	if (!user) {
		throw { statusCode: 404, message: 'User not found' };
	}
	if (!(await bcrypt.compare(password, user.password))) {
		throw { statusCode: 401, message: 'Invalid password' };
	}

	const data = { ...user, password: undefined };
	const token = jwt.sign(data, process.env.JWT_SECRET);

	return { ...data, token };
}

function fromToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				reject(err);
			} else {
				resolve(decoded);
			}
		});
	});
}

const seed = () => {
	const l = list.map(e => ({
		...e,
		password: bcrypt.hashSync(e.password, SALT_ROUNDS),
	}));
	return collection.insertMany(l);
};

const create = async user => {
	user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
	const result = await collection.insertOne({...user, _id: undefined});
	return await get(result.insertedId);
};

module.exports = {
	get,
	collection,
	seed,
	create,
	remove,
	update,
	login,
	fromToken,
	async getList() {
		return (await collection.find().toArray()).map(x => ({
			...x,
			password: undefined,
		}));
	},
};
module.exports.get = get;
