const express = require('express');

const app = express();

app.use(express.json());

app.listen(3003, () => console.log('Server is flying on 3003'))