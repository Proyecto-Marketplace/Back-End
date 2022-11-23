const express = require('express');
const config = require('../../config/config');
const categories = require('./components/network');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', categories);

app.listen(config.port, () => console.log(`listening on ${config.port}`));

module.exports = app;
