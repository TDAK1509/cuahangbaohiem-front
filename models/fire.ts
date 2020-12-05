import firebase from "firebase/app";
import "firebase/firestore";

export default class FireBase {
  public static init() {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  public static getFireStoreDb() {
    const db = firebase.firestore();

    if (process.env.NODE_ENV === "development") {
      try {
        db.settings({
          host: "localhost:8081",
          experimentalForceLongPolling: true,
          ssl: false
        });
      } catch {
        /* eslint-disable */
        console.warn("Firestore is initialized already");
      }
    }

    return db;
  }
}
