
module.exports = {

  clearAll: (req, res) => {

    
    chosenFighters.splice(i, chosenFighters.length);
    res.status(200).send(chosenFighters);
  }
}