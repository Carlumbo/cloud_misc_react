import * as firebase from "firebase";

const settings = { timmestampsInSnapshots: true };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCaCpnHpSqBSQ5Cx8Hb7EjahnLDVOFdxq0",
  authDomain: "misco-2af30.firebaseapp.com",
  databaseURL: "https://misco-2af30.firebaseio.com",
  projectId: "misco-2af30",
  storageBucket: "misco-2af30.appspot.com",
  messagingSenderId: "878809781730",
  appId: "1:878809781730:web:146592f8251433ba0b15bb",
  measurementId: "G-YG4ZJNMDLL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebaseConfig;
