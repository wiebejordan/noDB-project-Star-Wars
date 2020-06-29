import React, {Component} from 'react';
import RedSqd from './RedSqd';
import GoldSqd from './GoldSqd';


class Flight extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 3);
    const rand3 = Math.floor(Math.random() * 3);
    const rand4 = Math.ceil(Math.random() * 100);

    const mapFighters = this.props.chosenFighters.map((fighter, i) => (
      <RedSqd
        key={i}
        fighter={fighter}
        pilotFn= {this.props.pilotFn}
        kiaFn= {this.props.kiaFn}
        />
  
        
    ));  

    const mapGoldFighters = this.props.chosenGoldFighters.map((fighter, i) => (
      <GoldSqd
        goldKey={i}
        fighter={fighter}
        goldPilotFn={this.props.goldPilotFn}
        goldKiaFn={this.props.goldKiaFn}
        />
        
    ));  

    

   return (
     <div>
       <h1 className='your-squadrons'>Your Squadrons</h1>
        <label className="switch">
          <input type="checkbox" onClick={() => this.props.toggleSqd()}/>
          <span className="slider round"></span>
        </label>
       <div className='flight-display'>
         <div className='red'>
           {mapFighters}
         </div>
       <button className='launch' onClick={() => alert(`Battle Report:
       Enemy Destroyed:${rand1} 
       Red Squadron pilots KIA: ${rand2} 
       Gold Squadron pilots KIA: ${rand3} 
       Squadron Morale: ${rand4}%`)}>LAUNCH</button>
         <div className='gold'>
           {mapGoldFighters}
         </div>
      </div>
      {/* <button onClick={() => this.props.clearFn(this.props.chosenFighters)}>Clear Squadron</button> */}
     </div>
   )
 }
}

export default Flight;