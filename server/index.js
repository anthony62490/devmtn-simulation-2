const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3001;

const {getHouses, newHouse, deleteHouse} = require('./controller');

const app = express();
app.use(json());
// app.use('/resources', express.static('public'))

app.get('/api/houses', getHouses);
app.post('/api/house', newHouse);
app.delete('/api/house/:id', deleteHouse);

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(`error in massive() - ${err}`));

app.listen(port, () => console.log(`Listening for requests on port ${port}`))