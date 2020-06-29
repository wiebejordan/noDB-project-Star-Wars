const chosenFighters = [];
let id = 1;

module.exports = {
  getChosenFighters: (req, res) => {
    res.status(200).send(chosenFighters);
    
  },
  chooseFighter: (req, res) => {
    const {fighter} = req.body;

    
    fighter.id = id;
    id++
    
    
    
    if(chosenFighters.length < 3){
    chosenFighters.push(fighter);
    res.status(200).send(chosenFighters);
    }
  },
  editPilot: (req, res) => {
    const {id} = req.params;
    const {pilot} = req.body;

    const i = chosenFighters.findIndex(e => e.id === +id);
    chosenFighters[i].pilot = pilot;
    res.status(200).send(chosenFighters)
  },
  pilotKia: (req, res) => {
    const {id} = req.params;

    const i = chosenFighters.findIndex(e => e.id === +id); 
    chosenFighters.splice(i, 1);
    
    
    res.status(200).send(chosenFighters);
  },
  clearAll: (req, res) => {

    
    chosenFighters = [];
    res.status(200).send(chosenFighters);
  }
}