const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");

const {stripePrivateKey} = require("./config/config.js");
const { request, response } = require('express');
const stripe = require("stripe")(stripePrivateKey);

// - API

// - APP config
const app = express();

// - Midlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total; //passed in the URL as "...?total=..."
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);