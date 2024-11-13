import { initializeApp } from "firebase/app";  
// import { getAnalytics } from "firebase/analytics"; 
import { getStorage } from "firebase/storage";
import { getDatabase ,ref, onValue,set,push} from "firebase/database";
import { getFirestore } from "firebase/firestore";  // Import Firestore
import { getAuth } from "firebase/auth";  
  
const firebaseConfig = {  
  apiKey: "AIzaSyCbAZKVgSXp9eg2oDOTF_4yyqhQZ29SdGY",
  authDomain: "nanonest-eb325.firebaseapp.com",
  databaseURL: "https://nanonest-eb325-default-rtdb.firebaseio.com",
  projectId: "nanonest-eb325",
  storageBucket: "nanonest-eb325.appspot.com",
  messagingSenderId: "177298896443",
  appId: "1:177298896443:web:4691e003a12b8fcd164e1e",
  measurementId: "G-SRREJ08T9S"
};  
  
const app = initializeApp(firebaseConfig);  
// const analytics = getAnalytics(app);  
const auth = getAuth(app);  
const storage = getStorage(app);
const database = getDatabase(app); // Initialize the database
const firestore = getFirestore(app); // Initialize Firestore
  
export { auth, storage, database, firestore ,onValue , ref,set,push}; // Export firestore
