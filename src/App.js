import React, {Component} from 'react';
import Hanger from './components/Hanger';
import Header from './components/Header';
import Flight from './components/Flight';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chosenFighters: []
    }
    this.chooseFighter = this.chooseFighter.bind(this);
  }

  componentDidMount(){
    axios.get('/api/fighters')
      .then(res => {
        this.setState({chosenFighters: res.data})
      })
      .catch(err => console.log(err));
  }

  chooseFighter(fighter){
    axios.post('/api/fighters', {fighter})
      .then(res => {
        this.setState({chosenFighters: res.data})
      })
      .catch(err => console.log(err));
  }

  editPilot = (id, newPilot) => {
    let body = {pilot: newPilot};

    axios.put(`/api/fighters/${id}`, body)
    .then(res => {
      this.setState({chosenFighters: res.data})
    })
    .catch(err => console.log(err));
  }

  pilotKia = (id) => {
    axios.delete(`/api/fighters/${id}`)
    .then(res => {
      this.setState({chosenFighters: res.data})
    })
    .catch(err => console.log(err));
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Hanger 
        chooseFn={this.chooseFighter}/>
      <Flight 
         chosenFighters={this.state.chosenFighters}
         pilotFn={this.editPilot}
         kiaFn={this.pilotKia}/>
    </div>
  );
  }
}

export default App;
