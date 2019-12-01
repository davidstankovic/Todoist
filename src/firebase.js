import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBuLbb63piMW8bLj4eyhhuWIqkpV-9zRtI",
    authDomain: "todoist-5ea81.firebaseapp.com",
    databaseURL: "https://todoist-5ea81.firebaseio.com",
    projectId: "todoist-5ea81",
    storageBucket: "todoist-5ea81.appspot.com",
    messagingSenderId: "215493637703",
    appId: "1:215493637703:web:d62b649fa08316ff32a362"
});

export { firebaseConfig as firebase};