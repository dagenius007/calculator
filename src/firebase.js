import * as firebase from 'firebase';

var config = {
	apiKey: 'AIzaSyAIyWHBMDU482w7XhBBm7Jqle0vEFzxUyY',
	authDomain: 'abkprint-e0a17.firebaseapp.com',
	databaseURL: 'https://abkprint-e0a17.firebaseio.com',
	projectId: 'abkprint-e0a17',
	storageBucket: 'abkprint-e0a17.appspot.com',
	messagingSenderId: '476916762781'
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
