import React, {Component} from 'react';

class GoldSqd extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      pilotInput: ''
    }
  }

  handleInput = (val) => {
    this.setState({pilotInput: val})
  }

  handleToggle = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleEdit = (id,) => {
    this.props.goldPilotFn(id, this.state.pilotInput);
    this.handleToggle();
  }

  render(){
    return (
      <div>
        
        <img className={this.props.fighter.name} src={this.props.fighter.img}/>
        {this.state.isEditing
        ? (
          <div className='fighter-text'>
          <input 
            value={this.state.pilotInput}
            onChange={e => this.handleInput(e.target.value)} />
          <button
            onClick={() => this.handleEdit(this.props.fighter.id)}>
              Submit</button>
          </div>
        )
        
        : (
          <div>
          <p>{this.props.fighter.name}</p>
          <p>Pilot: {this.props.fighter.pilot}</p>
          <button onClick={this.handleToggle}>Edit Pilot</button>
          </div>
          
          )}
        <button onClick={() => this.props.goldKiaFn(this.props.fighter.id)}>Pilot KIA</button>
        
      </div>
    ) 
  }







}

export default GoldSqd;