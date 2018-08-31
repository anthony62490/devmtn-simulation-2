const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = process.env.PORT;

const {getData} = require('./controller');

const app = express();
app.use(json());

app.get('/api/test', getData);
// app.post('');
// app.put('');
// app.delete('');

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(`error in massive() - ${err}`));

app.listen(port, () => console.log(`Listening for requests on port ${port}`))