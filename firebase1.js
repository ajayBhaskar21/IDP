import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

let firebaseApp = null;

// Your web app's Firebase configuration
const firebaseConfig = {
    
};

if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
}

const database = getDatabase(firebaseApp);

export { database };
