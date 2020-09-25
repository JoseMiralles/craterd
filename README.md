# Setup

### Install npm dependencies

> npm install

### Create `config.js` in the '.\config' folder. And populate it:

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

### Start the server.

>npm start

# Publishing

### Login to firebase from the CLI. And then initialize.

>firebase login

>firebase init
- Select hosting.
- Select project.
- Name the directory, 'build'
- Say `y` to the prompt asking if this should be a single page app.

>npm run build

>firebase deploy