const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Serivox Welcome Test</title>
  </head>
  <body>
    <h1>Welcome Ahmad</h1>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
