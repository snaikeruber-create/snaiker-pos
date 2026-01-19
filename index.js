const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhooks/uber", (req, res) => {
  console.log("Webhook reçu:", req.body);
  res.status(200).json({ received: true });
});

app.get("/", (req, res) => {
  res.send("Snaiker POS running");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Snaiker POS running on port ${PORT}`);
});
