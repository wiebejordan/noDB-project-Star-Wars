import React, {Component} from 'react';

class Fighters extends Component {
  constructor(props){
    super(props);
    this.state ={
      img: 'https://i.pinimg.com/originals/22/b8/1b/22b81bf5335e2ebdab606702ffd4ef46.jpg'
    }
  }
  
    handleChoice = () => { 
      const {fighter} = this.props;
      let fighterChoice = {
        name: fighter.name,
        pilot: "___",
        img: this.handleFighterImage(fighter.name)
      };
      

      this.props.chooseFn(fighterChoice);
      }
    
      

    handleGoldChoice = () => { 
      const {fighter} = this.props;
      let goldFighterChoice = {
        name: fighter.name,
        pilot: "___",
        img: this.state.img
      }
      
      this.props.chooseGoldFn(goldFighterChoice)
    }

    handleFighterImage= (name) => {
      
      if(name === 'Y-wing'){
        return 'https://i.pinimg.com/originals/22/b8/1b/22b81bf5335e2ebdab606702ffd4ef46.jpg'}
        
        else if (name === 'X-wing'){
          return 'https://2.bp.blogspot.com/-C4ZktyJdXaw/V5tjqcRjboI/AAAAAAAB4J0/-yhhtknB7N00tGYXYnO8PfpSo2jKLSoRACLcB/s1600/X-Wing_Top.jpg'
        }

        else if (name === 'A-wing'){
          return 'https://gundampros.com/wp-content/uploads/2020/05/a-wing-starfighter-11.jpg'
        }
        else if (name === 'B-wing'){
          return 'https://vignette.wikia.nocookie.net/starwars/images/5/5b/Bwing_negvv.jpg/revision/latest?cb=20120115155839'
        }
      } 
      
    
    


    render(){
      

      return(
        <div>
          {this.props.whoEdits
          ? (
        <div onClick={this.handleChoice}>
          <img className='x-wing' src={this.state.img} alt='x-wing'/>
          <p>{this.props.fighter.name}</p>
          <p>{this.props.fighter.starship_class}</p>
          <p>Cost:{this.props.fighter.cost_in_credits}</p>
        </div>)
        : (
          <div onClick={this.handleGoldChoice}>
          <img className='x-wing' src="https://2.bp.blogspot.com/-C4ZktyJdXaw/V5tjqcRjboI/AAAAAAAB4J0/-yhhtknB7N00tGYXYnO8PfpSo2jKLSoRACLcB/s1600/X-Wing_Top.jpg" alt='x-wing'/>
          <p>{this.props.fighter.name}</p>
          <p>{this.props.fighter.starship_class}</p>
          <p>Cost:{this.props.fighter.cost_in_credits}</p>
        </div>
          )}
        </div>
      )
    }



}

export default Fighters;