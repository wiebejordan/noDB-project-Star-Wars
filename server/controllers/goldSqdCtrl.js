const chosenGoldFighters = [];
let goldId = 4;

module.exports = {
  getChosenGoldFighters: (req, res) => {
    res.status(200).send(chosenGoldFighters);
    
  },
  chooseGoldFighter: (req, res) => {
    const {fighter} = req.body;
    const goldFighter = fighter

    
    goldFighter.id = goldId;
    goldId++
    
    
    
    if(chosenGoldFighters.length < 3){
    chosenGoldFighters.push(goldFighter);
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
    const {id} = req.params;

    const j = chosenGoldFighters.findIndex(e => e.id === +id); 
    chosenGoldFighters.splice(j, 1);
    
    
    res.status(200).send(chosenGoldFighters);
  },
  clearAll: (req, res) => {

    
    chosenGoldFighters = [];
    res.status(200).send(chosenGoldFighters);
  }
}