import firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
  messagingSenderId: "908886937216"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BFsr7AJL3DJrbOpee2QFjRrMgDEzbv8JO631FThI86ULtqPQbjWpiMqKsXa7p0MlnravJbAogusGpX01pckGXO4"
);
export { messaging };