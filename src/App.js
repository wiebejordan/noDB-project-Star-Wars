import React, {Component} from 'react';
import Hanger from './components/Hanger';
import axios from 'axios';
import './App.css';


class App extends Component() {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="App">
      <Hanger />
    </div>
  );
  }
}

export default App;
