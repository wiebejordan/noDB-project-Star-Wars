const express = require('express');
const redSqdCtrl = require('./controllers/redSqdCtrl')
const fightersCtrl = require('./controllers/fightersCtrl');
const flightCtrl = require('./controllers/flightCtrl')
const goldSqdCtrl = require('./controllers/goldSqdCtrl')

const app = express();

app.use(express.json());

app.get('/api/fighter-hanger', fightersCtrl.getFighters);

app.get('/api/fighters', redSqdCtrl.getChosenFighters);
app.post('/api/fighters', redSqdCtrl.chooseFighter);
app.put('/api/fighters/:id', redSqdCtrl.editPilot);
app.delete('/api/fighters/:id', redSqdCtrl.pilotKia);
// app.delete('/api/fighters/:id', redSqdCtrl.clearAll);

app.get('/api/gold-fighters', goldSqdCtrl.getChosenGoldFighters);
app.post('/api/gold-fighters', goldSqdCtrl.chooseGoldFighter);
app.put('/api/gold-fighters/:id', goldSqdCtrl.editGoldPilot);
app.delete('/api/gold-fighters/:id', goldSqdCtrl.goldPilotKia);



app.listen(3003, () => console.log('Server is flying on 3003'))