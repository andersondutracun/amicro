import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importe o módulo de autenticação do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDRKLBPwyuinwIVfPhSzfRThvaS8DxrO2o",
  authDomain: "miniblog-c22e8.firebaseapp.com",
  projectId: "miniblog-c22e8",
  storageBucket: "miniblog-c22e8.appspot.com",
  messagingSenderId: "290993456586",
  appId: "1:290993456586:web:bd25aebad450e817ebfb33",
  measurementId: "G-1WHWL2HT93"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Inicialize o módulo de autenticação

export { db, auth }; // Exporte o módulo de autenticação também