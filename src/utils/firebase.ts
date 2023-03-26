import { getApp, initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { config } from "@/config/index";

const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch (e) {
    return initializeApp(config);
  }
};

const firebaseApp = createFirebaseApp({ ...config.firebaseConfig });
const firestore = getFirestore();
const firebaseAuth = getAuth(firebaseApp);
// Collections references
const messagesCollection = collection(firestore, "messages");

export { firebaseAuth, messagesCollection };
