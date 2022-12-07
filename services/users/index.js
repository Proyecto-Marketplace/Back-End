const express = require('express');
const config = require('../../config/config');
const users = require('./components/network');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', users);
const PORT = config.servicesUser.port || 5000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
