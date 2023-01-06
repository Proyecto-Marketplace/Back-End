const express = require('express');
const config = require('../../config/config');
const categories = require('./components/network');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/categories', categories);

const PORT = config.servicesCategories.port || 5000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
