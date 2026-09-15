
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-419d1.firebaseapp.com",
  projectId: "interviewiq-419d1",
  storageBucket: "interviewiq-419d1.firebasestorage.app",
  messagingSenderId: "59944680750",
  appId: "1:59944680750:web:769f0e95cd222e4f13cebf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };