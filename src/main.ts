import './styles/style.scss'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import './scripts/animation'
import './scripts/images'





const firebaseConfig = {
    apiKey: "AIzaSyATIB-H46uKpNoKTiLVEt03ZBFHVPx9Hgg",
    authDomain: "fitness-apx.firebaseapp.com",
    projectId: "fitness-apx",
    storageBucket: "fitness-apx.appspot.com",
    messagingSenderId: "598810959070",
    appId: "1:598810959070:web:0a8e2c4d1cf6ddba71364f",
    measurementId: "G-V9JJR2XM06"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);