# Setup

1. Install npm dependencies

> npm install

2. Create `config.js` in the '.\config' folder. And populate it:

Ex `config.js`:

```
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
```
3. Login to firebase from the CLI.

>firebase login

4. Start the server.

>npm start
