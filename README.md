## Setup

> npm install

Then create `config.js` in the '.\config' folder.

Populate config.js:

Ex file:
`
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  ...
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authCraterd = firebase.auth();

// NOTE: make sure to import "auth" from "./config/config.js" (this file), and not from "firebase" when importing this file.
export {db, authCraterd};
`

Lastly
>npm start