const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Health check (Uber aime bien)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Webhook Uber Eats
app.post("/webhooks/uber", (req, res) => {
  console.log("Webhook reçu:", req.body);
  res.status(200).json({ received: true });
});

// Port Railway ou local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Snaiker POS running on port", PORT);
});
