const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

app.listen(4000, () => console.log('API is running on port 4000'));