const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('welcome to the stock portfolio analysis');
});

//que 1///
function finalAnalysis(boughtAt, marketPrice, quantity) {
  let retrunMoney = (marketPrice - boughtAt) * quantity;
  return retrunMoney.toString();
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;
  res.send(finalAnalysis(boughtAt, marketPrice, quantity));
});

//que 2//

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let allStockPrice = stock1 + stock2 + stock3 + stock4;
  res.send(allStockPrice.toString());
});

//que 3//

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result = (returns / boughtAt) * 100;
  res.send(result.toString());
});

//que 4//

function totalinvestment(stock1, stock2, stock3, stock4) {
  finalReturn = stock1 + stock2 + stock3 + stock4;
  return finalReturn.toString();
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(totalinvestment(stock1, stock2, stock3, stock4));
});

//que 5//

function profit(returnPercentage) {
  if (returnPercentage > 0) {
    return 'profit';
  } else {
    return 'loss';
  }
}
app.get('/status', (req, res) => {
  let returnsPercentage = req.query.returnPercentage;
  res.send(profit(returnsPercentage));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
