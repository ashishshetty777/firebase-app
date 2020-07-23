import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCLww_UMQGC02jZACl_GgxQ1PXoU0wflu0',
  authDomain: 'think-piece-d8f4b.firebaseapp.com',
  databaseURL: 'https://think-piece-d8f4b.firebaseio.com',
  projectId: 'think-piece-d8f4b',
  storageBucket: 'think-piece-d8f4b.appspot.com',
  messagingSenderId: '510851194693',
  appId: '1:510851194693:web:244452a15fb1740324282c',
  measurementId: 'G-P3JPKQP9HX',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();

window.firebase = firebase;
export default firebase;
