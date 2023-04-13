import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMOpFEyAmmBi-qLI1lGV4wEJh7Ew0yoVU",
  authDomain: "the-game-fca98.firebaseapp.com",
  projectId: "the-game-fca98",
  storageBucket: "the-game-fca98.appspot.com",
  messagingSenderId: "1046866122853",
  appId: "1:1046866122853:web:063d28cba5a46fcad98e8c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

export default app;
