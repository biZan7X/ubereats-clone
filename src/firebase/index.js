import firebase from "firebase";

import config from "../../config";

var firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDING_ID,
  appId: config.APP_ID,
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export default firebase;
