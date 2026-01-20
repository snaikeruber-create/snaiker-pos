const express = require("express");

const app = express();
app.use(express.json());

app.post("/webhooks/uber", (req, res) => {
  console.log("Webhook reçu:", req.body);
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("Snaiker POS running");
});

const port = Number(process.env.PORT);

if (!port) {
  console.error("❌ PORT is not defined");
  process.exit(1);
}

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Snaiker POS running on port ${port}`);
});
