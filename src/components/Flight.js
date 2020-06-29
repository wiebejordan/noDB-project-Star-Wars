import React, {Component} from 'react';
import RedSqd from './RedSqd';
import GoldSqd from './GoldSqd';


class Flight extends Component{
  constructor(props){
    super(props)
    this.state = {
      flight: true,
       rand1: Math.floor(Math.random() * 10),
       rand2: Math.floor(Math.random() * 3),
       rand3: Math.floor(Math.random() * 3),
       rand4: Math.ceil(Math.random() * 100)
    }
  }

  toggleFlight(){
    if(this.props.chosenFighters.length === 3 && this.props.chosenGoldFighters.length === 3){
    this.setState({flight: !this.state.flight})}

  }
  launchFighters(){
    if(this.props.chosenFighters.length === 3 && this.props.chosenGoldFighters.length === 3){
    
      alert(`Battle Report:
       TIE fighters Destroyed: ${this.state.rand1} 
       Red Squadron pilots KIA: ${this.state.rand2} 
       Gold Squadron pilots KIA: ${this.state.rand3} 
       Squadron Morale: ${this.state.rand4}%`)
      }
  }

  render(){
    

    const mapFighters = this.props.chosenFighters.map((fighter, i) => (
      <RedSqd
        key={i}
        fighter={fighter}
        pilotFn= {this.props.pilotFn}
        kiaFn= {this.props.kiaFn}
        />
  
        
    ));  

    const mapGoldFighters = this.props.chosenGoldFighters.map((goldFighter, j) => (
      <GoldSqd
        goldKey={j}
        goldFighter={goldFighter}
        goldPilotFn={this.props.goldPilotFn}
        goldKiaFn={this.props.goldKiaFn}
        />
        
    ));  

      
    

   return (
     <div>
       <header className='your-squadrons'>Your Squadrons</header>
        <label className="switch">
          <input type="checkbox" onClick={() => this.props.toggleSqd()}/>
          <span className="slider round"></span>
        </label>
       <div className='flight-display'>
         <div className='red'>
           {mapFighters}
         </div>
         {this.props.chosenFighters.length === 3 && this.props.chosenGoldFighters.length === 3
         ? (
       <button 
       className='launch' 
       onClick={() => this.launchFighters()}>LAUNCH</button>)
       : (
        <button className='nolaunch' onClick={() => this.toggleFlight}>LAUNCH</button>
       )}
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