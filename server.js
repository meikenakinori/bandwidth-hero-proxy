const express = require('express');
const authenticate = require('./authenticate'); // 確保路徑正確
const params = require('./params'); // 確保路徑正確
const proxy = require('./proxy'); // 確保路徑正確

const app = express();
const PORT = process.env.PORT || 8080;

app.use(authenticate);
app.use(params);
app.use(proxy);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 全局錯誤處理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

