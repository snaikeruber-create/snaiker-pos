const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Route de santé (Railway / navigateur)
app.get("/", (req, res) => {
  res.status(200).send("Snaiker POS running");
});

// Webhook Uber – GET (utilisé par Uber pour tests / pings)
app.get("/webhooks/uber", (req, res) => {
  res.status(200).send("OK");
});

// Webhook Uber – POST (réception des événements)
app.post("/webhooks/uber", (req, res) => {
  console.log("Webhook Uber reçu :", JSON.stringify(req.body, null, 2));
  res.status(200).json({ received: true });
});

// IMPORTANT : Railway fournit le port via process.env.PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Snaiker POS running on port ${PORT}`);
});
