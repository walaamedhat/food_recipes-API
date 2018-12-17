require('env2')('./config.env');
const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = process.env.DB;

const app         = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))


MongoClient.connect(db, (err, database) => {
  if (err) return console.log(err);
  require('./app/routes')(app, database);
  app.listen(PORT, () => {
    console.log(`We are live on ${PORT}`);
  })
})
