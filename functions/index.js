const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { default: Stripe } = require('stripe');
const stripe =  require("stripe")('sk_test_51Hi2gGF9S8vXhUDhgQ6IrWqD0pSBRiRzq4iGvmfGyFLAICHWZxd17RG8mDZMdBAtYefUTIK3FVtFymy2kwgsQB1900q3PQMzZs');

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send ('Hello world'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total, "eur")

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "eur",
    });

    // OK -Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/challenge-7afe9/us-central1/api

