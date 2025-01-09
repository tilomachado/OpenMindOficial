import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyXntXghf4pFK77myaIx8CJvfW6mHGWKI",
    authDomain: "plataforma-do-mini-curso.firebaseapp.com",
    projectId: "plataforma-do-mini-curso",
    storageBucket: "plataforma-do-mini-curso.appspot.com",
    messagingSenderId: "424655587612",
    appId: "1:424655587612:web:851858a379c334227056e4",
    measurementId: "G-6CE0E9R3J5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);