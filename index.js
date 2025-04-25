const express = require('express');
const app = express();

app.use(express.json());

app.post('/hooks/swap/v2/balance-inquiry', (req, res) => {
  console.log('📦 Webhook recebido:');
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send('Recebido com sucesso');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API no ar na porta ${PORT}`);
});