const express = require('express');
const redSqdCtrl = require('./controllers/redSqdCtrl')
const fightersCtrl = require('./controllers/fightersCtrl');
const app = express();

app.use(express.json());

app.get('/api/fighter-hanger', fightersCtrl.getFighters);

app.get('/api/fighters', redSqdCtrl.getChosenFighters);
app.post('/api/fighters', redSqdCtrl.chooseFighters);
app.put('api/fighters/:id', redSqdCtrl.editPilot);
app.delete('api/fighters/:id', redSqdCtrl.pilotKia);


app.listen(3003, () => console.log('Server is flying on 3003'))