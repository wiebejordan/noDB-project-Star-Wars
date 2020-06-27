
module.exports = {

  clearAll: (req, res) => {

    chosenFighters = [],
    res.status(200).send(chosenFighters);
  }
}