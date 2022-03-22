const express = require('express');
const app = express();

const multer = require('multer');
const cors = require('cors');
const formData = multer();

const mainRoute = require('./router/main.router.js');

app.use('/', mainRoute);
app.use(express.urlencoded);
app.use(express.json);
app.use(formData.none());
app.use(
  cors({
    origin: '*',
  })
);

app.listen(8000, () => {
  console.log('server listening on http://127.0.0.1:8000 port');
});
