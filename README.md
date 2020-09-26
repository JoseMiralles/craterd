# Setup

### Install npm dependencies

> npm install
> cd functions
> npm install

### Create `config.js` in the '.\config' folders in ./src and in ./functions. And populate them:

Ex `/src/config.js`:

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
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authCraterd = firebase.auth();

export {db, authCraterd};
```

Ex `/functions/config.js`:

```
// Get it from the stripe console.
const stripePrivateKey = "sk_test_51HVMZ2CpqjUxOVQbbjJQ7W4AS48y8A3Z6K4kFggf3PfJ5BI0t47xc5iPkQ2Z3VpsOjCtbFwPJOZ4Nydyf5SPFFN00025PdS7vk";
module.exports.stripePrivateKey = stripePrivateKey;
```

### Start the local servers.

In the main directory, in one terminal:
> npm start

And in another terminal, in the /functions directory:
> firebase emulators:start

# Publishing

## Change baseURL in ./src/axios.js to the correct one.

```
const instance = axios.create({
    baseURL: "***REMOTE_URL***/api"
});
```

### Login to firebase from the CLI. And then initialize.

>firebase login

>firebase init
- Select hosting.
- Select project.
- Name the directory, 'build'
- Say `y` to the prompt asking if this should be a single page app.

>npm run build

>firebase deploy