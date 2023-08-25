// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7vlnUq09t1RciIfJljBxH9PqkMoDipsY",
    authDomain: "firestock-bd365.firebaseapp.com",
    projectId: "firestock-bd365",
    storageBucket: "firestock-bd365.appspot.com",
    messagingSenderId: "790128315085",
    appId: "1:790128315085:web:27c7c9e4395ba8e6adf784",
};

/* // Initialize Firebase
const app = initializeApp(firebaseConfig); */
// Initialize Firebase
const app = () => {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error(
            "No Firebase configuration object provided." +
                "\n" +
                "Add your web app's configuration object to firebase-config.js"
        );
    } else {
        console.log("Firebase initialized!");
    }
    return initializeApp(firebaseConfig);
};
export default app;
