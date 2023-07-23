const express = require('express');
const cors = require('cors')();
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const dogsRouter = require('./routes/dogs');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/dogs', dogsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});

const httpServer = http.createServer(app);

const httpsServer = https.createServer({
    key: fs.readFileSync('/app/cert/server.key'),
    cert: fs.readFileSync('/app/cert/server.crt'),
  }, app);

httpServer.listen(port, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
