import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBoAVFjlnZOb-Y0Znr5Y_t1vqNQL0wjQYE",
  authDomain: "interviewtask-2703b.firebaseapp.com",
  projectId: "interviewtask-2703b",
  storageBucket: "interviewtask-2703b.firebasestorage.app",
  messagingSenderId: "100025015050",
  appId: "1:100025015050:web:b65304395cac9cc3ab38f3",
  measurementId: "G-QH4TXYZ2JK"
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  getAnalytics(app);
}

export const db = getFirestore(app);