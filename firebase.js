import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

let firebaseApp = null;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlVPqSK2dGMUX3Iz6lENmhpRzokwDNZg4",
    authDomain: "idp-1-84f20.firebaseapp.com",
    databaseURL: "https://idp-1-84f20-default-rtdb.firebaseio.com",
    projectId: "idp-1-84f20",
    storageBucket: "idp-1-84f20.appspot.com",
    messagingSenderId: "377092112075",
    appId: "1:377092112075:web:d6487bdc04b512efb8a54e"
};

if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
}

const database = getDatabase(firebaseApp);

export { database };