const chosenFighters = [];
let id = 1;

module.exports = {
  getChosenFighters: (req, res) => {
    res.status(200).send(chosenFighters);
  },
  chooseFighters: (req, res) => {
    const {fighter} = req.body;

    fighter.id = id;
    id++;

    chosenFighters.push(fighter);
    res.status(200).send(chosenFighters);
  }
}