const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Snaiker POS is running");
});

app.post("/webhooks/uber", (req, res) => {
  console.log("Webhook reçu:", req.body);
  res.status(200).json({ received: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Snaiker POS running on port ${PORT}`);
});
