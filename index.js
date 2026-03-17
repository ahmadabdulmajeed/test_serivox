const express = require('express');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get('/', (_req, res) => {
  res.type('html').send('<!doctype html><html lang="en"><head><meta charset="utf-8"><title>test_serivox</title></head><body><main>Welcome Ahmad</main></body></html>');
});

app.listen(port, () => {
  console.log(`test_serivox listening on port ${port}`);
});
