require('dotenv').config();
const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DB,
	projectId: process.env.FIREBASE_PROJECTID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGE_SENDERID,
	appId: process.env.FIREBASE_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// get all users
router.get('/users', async (req, res) => {
	try {
		const usersRef = db.ref('users');
		usersRef.once('value', (snapshot) => res.status(200).json(snapshot));
	} catch (error) {
		res.status(500).send(error);
	}
});

// get one user
// router.get('/users/:id', async (req, res) => {
// 	try {
// 		const usersRef = db.ref(`users/${req.params.id}`);
// 		usersRef.once('value', (snapshot) => res.status(200).json(snapshot));
// 	} catch (error) {
// 		res.status(500).send(error);
// 	}
// });
router.get('/users   ', async (req, res) => {
	try {
		const usersRef = db.ref();
		usersRef
			.child('users')
			//.child(`${req.params.id}`)
			.get()
			.then((snapshot) => {
				if (snapshot.exists()) res.status(200).json(snapshot.val());
			});
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post('/createUser', (res, req) => {
	const usersRef = db.ref('users');
	const user = {
		email: 'abc@abc.com',
		password: 'pass',
		username: 'Sam',
		tips: {
			amount: 22,
			date: 'today',
			position: 'server',
		},
	};

	usersRef.push(user, (err) => {
		if (err) console.log(err);
	});
});
router.post('/addTip', (res, req) => {
	const usersRef = db.ref('users/-MaZqTUVZqACHtr9gH1N/tips');
	const tip = {
		amount: 22,
		date: 'today',
		position: 'server',
	};

	usersRef.push(tip, (err) => {
		if (err) console.log(err);
	});
});

module.exports = router;
