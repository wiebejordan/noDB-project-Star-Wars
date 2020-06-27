import React, {Component} from 'react';
import RedSqd from './RedSqd';
import GoldSqd from './GoldSqd';


class Flight extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const rand1 = Math.ceil(Math.random() * 10);
    const rand2 = Math.ceil(Math.random() * 4);
    const rand3 = Math.ceil(Math.random() * 100);

    const mapFighters = this.props.chosenFighters.map((fighter, i) => (
      <RedSqd
        key={i}
        fighter={fighter}
        pilotFn= {this.props.pilotFn}
        kiaFn= {this.props.kiaFn}
        />
  
        
    ));  

    const mapGoldFighters = this.props.chosenGoldFighters.map((goldFighter, i) => (
      <GoldSqd
        key={i}
        goldFighter={goldFighter}
        goldPilotFn={this.props.goldPilotFn}
        goldKiaFn={this.props.goldKiaFn}
        />
        
    ));  

    

   return (
     <div>
       <h1>Your Squadron</h1>
       <button onClick={() => alert(`Battle Report: Enemy Destroyed:${rand1} Pilots KIA: ${rand2} Squadron Morale: ${rand3}%`)}>LAUNCH</button>
       <div className='flight-display'>
         <div className='red'>
           {mapFighters}
         </div>
         <div className='gold'>
           {mapGoldFighters}
         </div>
      </div>
      <button onClick={() => this.props.clearFn(this.props.chosenFighters)}>Clear Squadron</button>
     </div>
   )
 }
}

export default Flight;