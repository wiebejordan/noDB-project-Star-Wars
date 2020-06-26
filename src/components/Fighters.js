import React, {Component} from 'react';

class Fighters extends Component {

    render(){
      return(
        <div>
          <p>{this.props.fighter.name}</p>
          <p>{this.props.fighter.starship_class}</p>
        </div>
      )
    }



}

export default Fighters;