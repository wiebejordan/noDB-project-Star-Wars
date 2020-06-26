import React, {Component} from 'react';

class Fighters extends Component {

    render(){
      return(
        <div>
          {/* <img className='x-wing' src={'https://2.bp.blogspot.com/-C4ZktyJdXaw/V5tjqcRjboI/AAAAAAAB4J0/-yhhtknB7N00tGYXYnO8PfpSo2jKLSoRACLcB/s1600/X-Wing_Top.jpg'}/> */}
          <p>{this.props.fighter.name}</p>
          <p>{this.props.fighter.starship_class}</p>
          <p>Cost: 5 </p>
        </div>
      )
    }



}

export default Fighters;