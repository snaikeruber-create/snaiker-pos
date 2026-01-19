const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Snaiker POS running');
});

app.post('/webhook', (req, res) => {
  console.log('Webhook reçu:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
