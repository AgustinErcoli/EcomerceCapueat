import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATR4skLH6fid24Z0b_fSIY9MP6Memk-DM",
  authDomain: "capueat.firebaseapp.com",
  projectId: "capueat",
  storageBucket: "capueat.appspot.com",
  messagingSenderId: "67844432937",
  appId: "1:67844432937:web:bb27051e1b1aaae37b2838"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}