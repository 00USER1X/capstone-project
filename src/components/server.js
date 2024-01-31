const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let history = [];

app.post('/addHistory', (req, res) => {
  const { searchTerm } = req.body;
  history.push(searchTerm);
  console.log('Added to history:', searchTerm);
  res.status(200).send('Added to history');
});

app.get('/getHistory', (req, res) => {
  res.status(200).json(history);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
