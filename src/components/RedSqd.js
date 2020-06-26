import React, {Component} from 'react';

class RedSqd extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div>
        <img className='x-wing' src={this.props.fighter.img}/>
        <p>{this.props.fighter.name}</p>
        <p>Pilot: {this.props.fighter.pilot}</p>
      </div>
    )
  }







}

export default RedSqd;