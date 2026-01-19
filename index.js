const express = require("express");

const app = express();
app.use(express.json());

app.post("/webhooks/uber", (req, res) => {
  console.log("Webhook reçu:", req.body);
  res.status(200).json({ received: true });
});

app.get("/", (req, res) => {
  res.send("Snaiker POS running");
});

// ⚠️ IMPORTANT POUR RAILWAY
const PORT = Number(process.env.PORT);

if (!PORT) {
  throw new Error("PORT is not defined");
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Snaiker POS running on port ${PORT}`);
});
