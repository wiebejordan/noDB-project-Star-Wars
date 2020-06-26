const express = require('express');

const fightersCtrl = require('./controllers/fightersCtrl');
const app = express();

app.use(express.json());

app.get('/api/fighter-hanger', fightersCtrl.getFighters);


app.listen(3003, () => console.log('Server is flying on 3003'))