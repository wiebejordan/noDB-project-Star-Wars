import React, {Component} from 'react';
import Ywing from './Ywing.png';
import Xwing from './XWing.png';
import Awing from './Awing.png';
import Bwing from './Bwing.png';



class Fighters extends Component {
  
  
    handleChoice = () => { 
      const {fighter} = this.props;
      let fighterChoice = {
        name: fighter.name,
        pilot: "___",
        img: this.handleFighterImage(fighter.name),
        cost: fighter.cost_in_credits
      };
      

      this.props.chooseFn(fighterChoice);
      // this.props.handleCounter();
      }
    
      

    handleGoldChoice = () => { 
      const {fighter} = this.props;
      let goldFighterChoice = {
        name: fighter.name,
        pilot: '___',
        img: this.handleFighterImage(fighter.name)
      }
      
      this.props.chooseGoldFn(goldFighterChoice);
      
    }

    handleFighterImage= (name) => {
      
      if(name === 'Y-wing'){
        return `${Ywing}`}
        
        else if (name === 'X-wing'){
          return `${Xwing}`
        }

        else if (name === 'A-wing'){
          return `${Awing}`
        }
        else if (name === 'B-wing'){
          return `${Bwing}`
        }
      } 
      
    
    


    render(){
      

      return(
        <div >
          {this.props.whoEdits
          ? (
        <div onClick={this.handleChoice}>
          <img className={this.props.fighter.name} src={this.handleFighterImage(this.props.fighter.name)} alt={this.props.fighter.name}/>
          <p className='fighters-info'>{this.props.fighter.name}</p>
          <p className='fighters-info'>{this.props.fighter.starship_class}</p>
          <p className='fighters-info'>Cost:{this.props.fighter.cost_in_credits}</p>
        </div>)
        : (
          <div onClick={this.handleGoldChoice}>
          <img className={this.props.fighter.name} src={this.handleFighterImage(this.props.fighter.name)} alt={this.props.fighter.name}/>
          <p className='fighters-info'>{this.props.fighter.name}</p>
          <p className='fighters-info'>{this.props.fighter.starship_class}</p>
          <p className='fighters-info'>Cost:{this.props.fighter.cost_in_credits}</p>
        </div>
          )}
        </div>
      )
    }



}

export default Fighters;