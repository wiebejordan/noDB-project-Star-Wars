import React, {Component} from 'react';

class Fighters extends Component {
    handleChoice = () => { 
      const {fighter} = this.props;
      let fighterChoice = {
        name: fighter.name,
        pilot: '____',
        img: 'https://2.bp.blogspot.com/-C4ZktyJdXaw/V5tjqcRjboI/AAAAAAAB4J0/-yhhtknB7N00tGYXYnO8PfpSo2jKLSoRACLcB/s1600/X-Wing_Top.jpg'
      }
      
      this.props.chooseFn(fighterChoice)
    }
    render(){
      const xImg = '';
      const yImg = '';
      const aImg = '';
      const bImg = '';

      return(
        <div onClick={this.handleChoice}>
          <img className='x-wing' src="https://2.bp.blogspot.com/-C4ZktyJdXaw/V5tjqcRjboI/AAAAAAAB4J0/-yhhtknB7N00tGYXYnO8PfpSo2jKLSoRACLcB/s1600/X-Wing_Top.jpg" alt='x-wing'/>
          <p>{this.props.fighter.name}</p>
          <p>{this.props.fighter.starship_class}</p>
          <p>Cost:{this.props.fighter.cost_in_credits}</p>
        </div>
      )
    }



}

export default Fighters;