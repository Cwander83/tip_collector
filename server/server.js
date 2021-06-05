require('dotenv').config();
const express = require('express');
//const firebaseDb = require('./firebase.js')

const app = express();

const httpPort = 8080;

//const router = express.Router();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile('../public/index.html');
});

//app.use('/api', firebaseDb)
app.listen(httpPort, function () {
	console.log(`Listening on port ${httpPort}!`);
});
