import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCo_IeWz_zJN7OObz9pJOJl2fQHHJaAxk",
  authDomain: "programacion-web-5bec4.firebaseapp.com",
  projectId: "programacion-web-5bec4",
  storageBucket: "programacion-web-5bec4.appspot.com",
  messagingSenderId: "353041721791",
  appId: "1:353041721791:web:582067ce8e662a4306590a"
};

// Initialize Firebase
initializeApp(firebaseConfig);


//Termina firebase

const app = createApp(App)

app.use(router)

app.mount('#app')
