import React, {Component} from 'react';
import axios from 'axios';
import Fighters from './Fighters';


class Hanger extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        fighterChoices: []
    }
  }

  componentDidMount(){
    this.getFighterChoices();
  }

  getFighterChoices = () => {
    axios.get('/api/fighter-hanger')
      .then(res => {
        this.setState({fighterChoices: res.data})
      })
      .catch(err => console.log(err))
  }

  render(){
    const mapFighters = this.state.fighterChoices.map((fighter, i) => (
      <Fighters
          key={i}
          fighter = {fighter}
          chooseFn= {this.props.chooseFn}/>
    ))


    return(
      <div>
        <div className='fighter-info-flex'>
        {mapFighters}
        </div>
      </div>

    )
  }

}

export default Hanger;










