const Binance = require('node-binance-api');
const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();
const port = 2020;

const binance = new Binance().options({
  APIKEY: 'BqwSegqGujvSiHwA5RRYUPcq7cKcUn07PKLHD1CL0kZpTroWQ0zbmalzw9ckkhGq',
  APISECRET: 'wavT2clxNTAf4pe5hqyMXTIFVtVom6n2xhVr5eUp53HnANPI3tBzDRvGJsS68XeG',
});

moment.locale('cs');
app.use(bodyParser.text());

app.get('/long', async (req, res) => {
  console.log('Ahoj!');
  const aha = await binance.futuresAccount();
  res.json(aha);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
