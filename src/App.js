import React, {Component} from 'react';
import Hanger from './components/Hanger';
import Header from './components/Header';
import Flight from './components/Flight';
import Footer from './components/Footer'
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chosenFighters: [],
      chosenGoldFighters: [],
      whoEdits: true
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
      .catch(err => console.log(err));
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

  toggleSqd =() =>
    this.setState({whoEdits: !this.state.whoEdits})
  

  //GOlD SQUADRON************************************************

  chooseGoldFighter(goldFighter){
    if(this.state.whoEdits === false){
    axios.post('/api/gold-fighters', {fighter: goldFighter})
      .then(res => {
        this.setState({chosenGoldFighters: res.data})
      })
      .catch(err => console.log(err));
    } 
  }

  editGoldPilot = (id, newPilot) => {
    if(this.state.whoEdits === false){
    let body = {pilot: newPilot};

    axios.put(`/api/gold-fighters/${id}`, body)
    .then(res => {
      this.setState({chosenGoldFighters: res.data})
    })
    .catch(err => console.log(err));
    }
  }

  goldPilotKia = (id) => {
    if(this.state.whoEdits === false){
    axios.delete(`/api/gold-fighters/${id}`)
    .then(res => {
      this.setState({chosenGoldFighters: res.data})
    })
    .catch(err => console.log(err));
    }
  } 

  render(){
  return (
    <div className="App">
      <Footer/>
      <Header />
      <Hanger 
        chooseFn={this.chooseFighter}
        chooseGoldFn={this.chooseGoldFighter}
        toggleSqd={this.toggleSqd}
        whoEdits={this.state.whoEdits}/>
        
      <Flight 
         chosenFighters={this.state.chosenFighters}
         pilotFn={this.editPilot}
         kiaFn={this.pilotKia}
         
         chosenGoldFighters={this.state.chosenGoldFighters}
         goldPilotFn={this.editGoldPilot}
         goldKiaFn={this.goldPilotKia}
         
         clearFn={this.clearAll}
         toggleSqd={this.toggleSqd}
         />
        <Footer/> 
         

         
    </div>
  );
  }
}

export default App;
