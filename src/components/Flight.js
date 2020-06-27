import React, {Component} from 'react';
import RedSqd from './RedSqd';


 const Flight = props => {
    const mapFighters = props.chosenFighters.map((fighter, i) => (
      <RedSqd
        key={i}
        fighter={fighter}
        pilotFn= {props.pilotFn}
        kiaFn= {props.kiaFn}
        />
        
    ))  

   return (
     <div>
       <h1>Your Squadron</h1>
       <div className='flight-display'>
         <div className='red'>
           {mapFighters}
         </div>
      </div>
      <button onClick={() => this.props.clearFn(this.props.chosenFighters)}>Clear Squadron</button>
     </div>
   )
 }

export default Flight;