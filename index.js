const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('success');
});

app.get('/about', (req, res) => {
  res.send('we are about');
});

app.listen(8000, () => {
  console.log('server listening on http://127.0.0.1:8000 port');
});
