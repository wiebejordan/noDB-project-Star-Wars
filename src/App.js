import React, {Component} from 'react';
import Hanger from './components/Hanger';
import Header from './components/Header'
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Hanger />
    </div>
  );
  }
}

export default App;
