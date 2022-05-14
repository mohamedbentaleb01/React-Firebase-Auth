import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7IZT-3Da0CR70LFS54A4orwaqo78P6aE",
  authDomain: "react-auth-with-firebase-987e0.firebaseapp.com",
  projectId: "react-auth-with-firebase-987e0",
  storageBucket: "react-auth-with-firebase-987e0.appspot.com",
  messagingSenderId: "738780363043",
  appId: "1:738780363043:web:4d2d3350fbbe9a117fb496",
  measurementId: "G-VKD4GP7WE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;