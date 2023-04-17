import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//https://www.youtube.com/watch?v=boZJtNzRCDQ

const firebaseConfig = {
  apiKey: "AIzaSyDThI40NbWZvzk7eVQAm8Dcm_7Cz06nnXs",
  authDomain: "authreact-5ad43.firebaseapp.com",
  projectId: "authreact-5ad43",
  storageBucket: "authreact-5ad43.appspot.com",
  messagingSenderId: "464113376882",
  appId: "1:464113376882:web:c7c0fb966da66aefeaeceb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
