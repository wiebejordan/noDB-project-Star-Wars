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
          />
    ))


    return(
      <div>
        <div className='fighter-flex'>
        <img className='x-wing' src={'https://2.bp.blogspot.com/-C4ZktyJdXaw/V5tjqcRjboI/AAAAAAAB4J0/-yhhtknB7N00tGYXYnO8PfpSo2jKLSoRACLcB/s1600/X-Wing_Top.jpg'}/>
        <img className='x-wing' src={'https://i.pinimg.com/originals/22/b8/1b/22b81bf5335e2ebdab606702ffd4ef46.jpg'}/>
        <img className='x-wing' src={'https://gundampros.com/wp-content/uploads/2020/05/a-wing-starfighter-11.jpg'}/>
        <img className='x-wing' src={'https://vignette.wikia.nocookie.net/starwars/images/5/5b/Bwing_negvv.jpg/revision/latest?cb=20120115155839'}/>
        </div>
        <div className='fighter-info-flex'>
        {mapFighters}
        </div>
      </div>

    )
  }

}

export default Hanger;










