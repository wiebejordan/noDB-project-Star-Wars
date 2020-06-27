const chosenGoldFighters = [];
let id = 1;

module.exports = {
  getChosenFighters: (req, res) => {
    res.status(200).send(chosenGoldFighters);
    
  },
  chooseGoldFighter: (req, res) => {
    const {fighter} = req.body;

    
    fighter.id = id;
    id++
    
    
    
    if(chosenGoldFighters.length < 3){
    chosenGoldFighters.push(fighter);
    res.status(200).send(chosenGoldFighters);
    }
  },
  editGoldPilot: (req, res) => {
    const {id} = req.params;
    const {pilot} = req.body;

    const i = chosenGoldFighters.findIndex(e => e.id === +id);
    chosenGoldFighters[i].pilot = pilot;
    res.status(200).send(chosenGoldFighters)
  },
  goldPilotKia: (req, res) => {
    // const {id} = req.params;

    const i = chosenGoldFighters.findIndex(e => req.params.id === +id); 
    chosenGoldFighters.splice(i, 1);
    
    res.status(200).send(chosenGoldFighters);
  },
  clearAll: (req, res) => {

    
    chosenGoldFighters = [];
    res.status(200).send(chosenGoldFighters);
  }
}