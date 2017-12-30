/**
 * Created by bhavyaagg on 31/12/17.
 */

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
  res.send("Get Working");
});

app.post('/post', (req, res, next) => {
  res.send("Post Working");
});

app.listen(4000, function () {
  console.log("Server listening on port 4000");
});