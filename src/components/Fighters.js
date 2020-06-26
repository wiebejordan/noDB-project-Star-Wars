import React, {Component} from 'react';

class Fighters extends Component {
    handleChoice = () => { 
      const {fighter} = this.props;
      let fighterChoice = {
        name: fighter.name,
        pilot: ''
      }
      this.props.chooseFn(fighter.name)
    }
    render(){
      return(
        <div onClick={this.handleChoice}>
          <p>{this.props.fighter.name}</p>
          <p>{this.props.fighter.starship_class}</p>
          <p>Cost:{this.props.fighter.cost_in_credits}</p>
        </div>
      )
    }



}

export default Fighters;