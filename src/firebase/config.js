import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// my web app's Firebase configuration
export const firebaseConfig = {
	apiKey: "AIzaSyCRgW6NJ88jzX64GsrZ0URfVMp0bEQtsfs",
	authDomain: "ecommerce-c65bb.firebaseapp.com",
	projectId: "ecommerce-c65bb",
	storageBucket: "ecommerce-c65bb.appspot.com",
	messagingSenderId: "580198328770",
	appId: "1:580198328770:web:7be1dac451862f29428e5b"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
