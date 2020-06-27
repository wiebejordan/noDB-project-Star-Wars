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
      chosenFighters: [],
      chosenGoldFighters: [],
      whoEdits: false
    }
    this.chooseFighter = this.chooseFighter.bind(this);
    this.chooseGoldFighter = this.chooseGoldFighter.bind(this);
  }

  componentDidMount(){
    axios.get('/api/fighters')
      .then(res => {
        this.setState({chosenFighters: res.data})
      })
      .catch(err => console.log(err));
    axios.get('/api/fighters')
      .then(res => {
        this.setState({chosenGoldFighters: res.data})
      })
  }

  chooseFighter(fighter){
    if(this.state.whoEdits === true){
    axios.post('/api/fighters', {fighter: fighter})
      .then(res => {
        this.setState({chosenFighters: res.data})
      })
      .catch(err => console.log(err));
    }
  }

  editPilot = (id, newPilot) => {
    if(this.state.whoEdits === true){
    let body = {pilot: newPilot};

    axios.put(`/api/fighters/${id}`, body)
    .then(res => {
      this.setState({chosenFighters: res.data})
    })
    .catch(err => console.log(err));
    }
  }

  pilotKia = (id) => {
    if(this.state.whoEdits === true){
    axios.delete(`/api/fighters/${id}`)
    .then(res => {
      this.setState({chosenFighters: res.data})
    })
    .catch(err => console.log(err));
    }
  } 

  clearAll = (id) => {
    
    axios.delete(`/api/fighters/${id}`)
    .then(res => {
      this.setState({chosenFighters: res.data})
    })
    .catch(err => console.log(err));
  
  }

  toggleSqd(){
    this.setState({whoEdits: !this.state.whoEdits})
  }

  //GOlD SQUADRON************************************************

  chooseGoldFighter(fighter){
    if(this.state.whoEdits === false){
    axios.post('/api/fighters', {fighter: fighter})
      .then(res => {
        this.setState({chosenGoldFighters: res.data})
      })
      .catch(err => console.log(err));
    } 
  }

  editGoldPilot = (id, newPilot) => {
    if(this.state.whoEdits === false){
    let body = {pilot: newPilot};

    axios.put(`/api/fighters/${id}`, body)
    .then(res => {
      this.setState({chosenGoldFighters: res.data})
    })
    .catch(err => console.log(err));
    }
  }

  goldPilotKia = (id) => {
    if(this.state.whoEdits === false){
    axios.delete(`/api/fighters/${id}`)
    .then(res => {
      this.setState({chosenGoldFighters: res.data})
    })
    .catch(err => console.log(err));
    }
  } 

  render(){
  return (
    <div className="App">
      <Header />
      <Hanger 
        chooseFn={this.chooseFighter}
        chooseGoldFn={this.chooseGoldFighter}/>
      <Flight 
         chosenFighters={this.state.chosenFighters}
         pilotFn={this.editPilot}
         kiaFn={this.pilotKia}
         
         chosenGoldFighters={this.state.chosenGoldFighters}
         goldPilotFn={this.editGoldPilot}
         goldKiaFn={this.goldPilotKia}
         
         clearFn={this.clearAll}
         />
         
         

         
    </div>
  );
  }
}

export default App;
