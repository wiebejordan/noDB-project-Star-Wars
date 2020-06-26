const axios = require('axios');

module.exports = {
  getFighters: (req, res) => {
    const fightersArray = [];

    axios.get(`http://swapi.dev/api/starships/12/`)
      .then(response => {
        fightersArray.push(response.data);
        axios.get('http://swapi.dev/api/starships/11/')
          .then(response => {
            fightersArray.push(response.data);
            axios.get('http://swapi.dev/api/starships/28/')
              .then(response => {
                fightersArray.push(response.data);
                axios.get('http://swapi.dev/api/starships/29/')
                 .then(response => {
                   fightersArray.push(response.data);
                   res.status(200).send(fightersArray)
                 })
              })
          })

      })
      .catch(err => res.status(500).send(err))
  }
}