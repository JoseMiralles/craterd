# Setup

### Install npm dependencies

> npm install

### Create `config.js` in the '.\config' folder. And populate it:

Ex `config.js`:

```
import firebase from "firebase";

// Get it from the firebase console.
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  ...
};

// Get it from the Stripe dev console.
export const stripeKeys = {
  public: "****...",
  private: "*****..."
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authCraterd = firebase.auth();

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